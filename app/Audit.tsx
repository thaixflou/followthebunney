"use client";

import { useMemo, useState } from "react";
import { PATHS, PROFILES } from "@/lib/paths";
import { allAnswered, band, dontKnow, forMinutes, horizons, scoreAnswers, type Answers } from "@/lib/engine";
import { toCsv } from "@/lib/csv";
import { funnel, PERIODS_PER_YEAR } from "@/lib/funnel";
import type { AuditPath, Calculator as CalculatorText, Kit } from "@/lib/types";

function downloadCsv(path: AuditPath) {
  const { filename, columns, examples } = path.template;
  const url = URL.createObjectURL(new Blob([toCsv(columns, examples)], { type: "text/csv;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadKit(kit: Kit) {
  const url = URL.createObjectURL(new Blob([kit.body], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = kit.filename;
  link.click();
  URL.revokeObjectURL(url);
}

function FunnelCalculator({ calc }: { calc: CalculatorText }) {
  const [counts, setCounts] = useState<Record<string, string>>({});
  const [ticket, setTicket] = useState("");

  // Live: the result updates on every keystroke. Stages are read in order up to the first empty one.
  const has = (v: string | undefined) => v !== undefined && v !== "";
  const prefix: number[] = [];
  for (const s of calc.stages) {
    if (!has(counts[s.id])) break;
    prefix.push(Number(counts[s.id]));
  }
  const allStages = prefix.length === calc.stages.length;
  const hasTicket = has(ticket);
  const result = prefix.length >= 2 ? funnel(prefix, hasTicket ? Number(ticket) : 0) : null;
  const label = (i: number) => calc.stages[i].label;

  return (
    <div className="template">
      <h2>{calc.title}</h2>
      <p>{calc.text}</p>
      <p className="muted small">{calc.periodNote}</p>
      {calc.stages.map((s) => (
        <label key={s.id} className="field">
          <span>{s.label}</span>
          <input type="number" inputMode="numeric" min={0} value={counts[s.id] ?? ""} onChange={(e) => setCounts((c) => ({ ...c, [s.id]: e.target.value }))} />
        </label>
      ))}
      <label className="field">
        <span>{calc.ticketLabel}</span>
        <input type="number" inputMode="decimal" min={0} value={ticket} onChange={(e) => setTicket(e.target.value)} />
      </label>

      {(result || hasTicket) && (
        <div className="calc-result" aria-live="polite">
          {result && !result.ok && <p className="money">{calc.orderError}</p>}
          {result && result.ok && (
            <>
              <h3>{calc.ratesTitle}</h3>
              {result.steps.map((s) => (
                <p key={s.to}>{calc.rate(label(s.from), label(s.to), Math.round(s.rate * 100))}</p>
              ))}
              {allStages && (
                <>
                  <p>{calc.weakest(label(result.weakest.from), label(result.weakest.to), Math.round(result.weakest.rate * 100))}</p>
                  {hasTicket && result.valuePerPoint(result.weakest) > 0 && (
                    <p>{calc.onePoint(label(result.weakest.from), label(result.weakest.to), result.weakest.extraWinsPerPoint, result.valuePerPoint(result.weakest))}</p>
                  )}
                </>
              )}
            </>
          )}
          {hasTicket && <p className="big-line">{calc.oneProject(Number(ticket) * PERIODS_PER_YEAR)}</p>}
          <p className="muted small">{calc.assumption}</p>
        </div>
      )}
    </div>
  );
}

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://revenuebythais.com";

// Step: -1 = intro, 0 = context, 1..n = one area per screen, n+1 = result.
function PathAudit({ path: fullPath, onExit }: { path: AuditPath; onExit: () => void }) {
  const [minutes, setMinutes] = useState(15);
  const path = useMemo(() => forMinutes(fullPath, minutes), [fullPath, minutes]);
  const t = path.text;
  const [step, setStep] = useState(-1);
  const [context, setContext] = useState<Record<string, string>>({});
  const [answers, setAnswers] = useState<Answers>({});

  const total = path.areas.length + 1;
  const result = useMemo(() => scoreAnswers(path, answers), [path, answers]);
  const plan = useMemo(() => horizons(result), [result]);
  const isOwner = context[t.ownerQuestionId] === "owner";
  const done = step > path.areas.length;
  const area = step >= 1 && !done ? path.areas[step - 1] : null;
  const areaQuestions = area ? path.questions.filter((q) => q.area === area.id) : [];

  function restart() {
    setContext({});
    setAnswers({});
    setStep(-1);
  }

  return (
    <main className="shell" lang={t.lang}>
      <p className="privacy">{t.privacy}</p>

      {step >= 0 && !done && (
        <>
          <p className="progress">{t.step(step + 1, total)}</p>
          <div className="meter" aria-hidden="true"><div style={{ width: `${((step + 1) / total) * 100}%` }} /></div>
        </>
      )}

      {step === -1 && (
        <section className="card">
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          {fullPath.lengths ? (
            <>
              <h2>{t.timeTitle}</h2>
              <div className="row" style={{ justifyContent: "flex-start", flexWrap: "wrap" }}>
                {[1, 5, 15].map((n) => (
                  <button key={n} className="btn" onClick={() => { setMinutes(n); setStep(0); }}>{t.minutes(n)}</button>
                ))}
              </div>
              <div className="row"><button className="link" onClick={onExit}>{t.back}</button></div>
            </>
          ) : (
            <div className="row">
              <button className="link" onClick={onExit}>{t.back}</button>
              <button className="btn" onClick={() => setStep(0)}>{t.start}</button>
            </div>
          )}
        </section>
      )}

      {step === 0 && (
        <section className="card">
          <h1>{t.contextTitle}</h1>
          {path.context.map((q) => (
            <fieldset key={q.id} className="group">
              <legend>{q.text}</legend>
              {q.options.map((o) => (
                <label key={o.value} className="check">
                  <input type="radio" name={q.id} checked={context[q.id] === o.value} onChange={() => setContext((c) => ({ ...c, [q.id]: o.value }))} />
                  {o.label}
                </label>
              ))}
            </fieldset>
          ))}
          <div className="row">
            <button className="link" onClick={() => setStep(-1)}>{t.back}</button>
            <button className="btn" disabled={!path.context.every((q) => context[q.id])} onClick={() => setStep(1)}>{t.next}</button>
          </div>
        </section>
      )}

      {area && (
        <section className="card">
          <h1>{area.name}</h1>
          <p className="muted">{area.blurb}</p>
          {areaQuestions.map((q) => (
            <fieldset key={q.id} className="group">
              <legend>{q.text}</legend>
              {[...q.options, dontKnow(t.dontKnow)].map((o) => (
                <label key={o.value} className="check">
                  <input
                    type="radio"
                    name={q.id}
                    checked={answers[q.id] === o.value}
                    onChange={() => {
                      setAnswers((a) => ({ ...a, [q.id]: o.value }));
                      // One question on the screen: moving on after the choice saves a click. Back keeps the answer.
                      if (areaQuestions.length === 1) setStep(step + 1);
                    }}
                  />
                  {o.label}
                </label>
              ))}
            </fieldset>
          ))}
          <div className="row">
            <button className="link" onClick={() => setStep(step - 1)}>{t.back}</button>
            <button className="btn" disabled={!areaQuestions.every((q) => answers[q.id])} onClick={() => setStep(step + 1)}>
              {step === path.areas.length ? t.seeResult : t.next}
            </button>
          </div>
        </section>
      )}

      {done && allAnswered(path, answers) && (
        <section className="card">
          <h1>{isOwner ? t.resultTitleOwner : t.resultTitleOperator}</h1>
          <div className="overall"><span className="big">{result.overall}</span><span>/100 · {t.overall} · {band(path, result.overall)}</span></div>

          <h2>{t.areasTitle}</h2>
          {result.areas.map(({ area: a, score }) => (
            <div key={a.id} className="aspect">
              <div className="aspect-head"><strong>{a.name}</strong><span>{score}/100 · {band(path, score)}</span></div>
              <div className="bar"><div style={{ width: `${score}%` }} /></div>
            </div>
          ))}

          {result.weakest.length === 0 ? (
            <p>{t.allGood}</p>
          ) : (
            <>
              <h2>{t.todayTitle}</h2>
              <p className="muted">{t.todayIntro}</p>
              {plan.today.map(({ area: a, text }) => (
                <article key={a.id} className="advice">
                  <strong>{a.name}</strong>
                  <p>{text}</p>
                  {isOwner && <p className="money"><strong>{t.moneyLabel}:</strong> {a.advice.money}</p>}
                </article>
              ))}

              <h2>{t.quarterTitle}</h2>
              <p className="muted">{t.quarterIntro}</p>
              {plan.quarter.map(({ area: a, text }) => (
                <article key={a.id} className="advice"><strong>{a.name}</strong><p>{text}</p></article>
              ))}

              <h2>{t.longTitle}</h2>
              <p className="muted">{t.longIntro}</p>
              {plan.longTerm.map(({ area: a, text }) => (
                <article key={a.id} className="advice"><strong>{a.name}</strong><p>{text}</p></article>
              ))}
            </>
          )}

          {path.calculator && <FunnelCalculator calc={path.calculator} />}

          {path.kit && (
            <div className="template">
              <h2>{path.kit.title}</h2>
              <p>{path.kit.text}</p>
              <button className="btn" onClick={() => downloadKit(path.kit!)}>{path.kit.button}</button>
            </div>
          )}

          <div className="template">
            <h2>{path.template.title}</h2>
            <p>{path.template.text}</p>
            <button className="btn" onClick={() => downloadCsv(path)}>{path.template.button}</button>
          </div>

          <div className="cta">
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaText}</p>
            <a className="btn" href={BOOKING_URL}>{t.ctaButton}</a>
          </div>
          <button className="link" onClick={restart}>{t.restart}</button>
        </section>
      )}
    </main>
  );
}

export default function Audit({ initialPath = "" }: { initialPath?: string }) {
  const [pathId, setPathId] = useState(initialPath);
  const path = PATHS.find((p) => p.id === pathId);
  if (path) return <PathAudit path={path} onExit={() => setPathId("")} />;

  return (
    <main className="shell">
      <h1>Follow the Bunny</h1>
      <p>A free audit of where revenue leaks in your commercial flow. Pick the profile that fits you.</p>
      <div className="choices">
        {PROFILES.map((p) => (
          <button key={p.id} className="choice" disabled={!p.ready} onClick={() => setPathId(p.id)}>
            <strong>{p.label}</strong> <span className="muted">{p.hint}{p.ready ? "" : " · coming soon"}</span>
          </button>
        ))}
      </div>
    </main>
  );
}
