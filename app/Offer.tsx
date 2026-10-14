"use client";

import { useState } from "react";
import { BOOKING_URL, COPY, type Lang } from "@/content/offer.ts";
import { referralGap, SPRINT_PRICE } from "@/lib/referral.ts";

export default function Offer() {
  const [lang, setLang] = useState<Lang>("en");
  const [clientValue, setClientValue] = useState("");
  const [won, setWon] = useState("");
  const [fromReferrals, setFromReferrals] = useState("");
  const [want, setWant] = useState("");
  const t = COPY[lang];

  const money = (n: number) => new Intl.NumberFormat(t.locale, { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(n);
  const percent = (n: number) => new Intl.NumberFormat(t.locale, { style: "percent", maximumFractionDigits: 0 }).format(n);

  const filled = clientValue !== "" && won !== "" && fromReferrals !== "" && want !== "";
  const result = filled
    ? referralGap({ clientValue: Number(clientValue), won: Number(won), fromReferrals: Number(fromReferrals), want: Number(want) })
    : null;

  const boxes: [keyof typeof t.fields, string, (v: string) => void][] = [
    ["clientValue", clientValue, setClientValue],
    ["won", won, setWon],
    ["fromReferrals", fromReferrals, setFromReferrals],
    ["want", want, setWant],
  ];

  return (
    <main className="shell" lang={t.lang}>
      <div className="row" style={{ justifyContent: "space-between", marginTop: 0 }}>
        <p className="privacy" style={{ margin: 0 }}>{t.eyebrow}</p>
        <button className="link" onClick={() => setLang(lang === "en" ? "pt" : "en")} lang={lang === "en" ? "pt-BR" : "en"}>
          {t.switchTo}
        </button>
      </div>

      <h1>{t.title}</h1>
      <p>{t.intro}</p>

      <section className="template">
        <h2>{t.calcTitle}</h2>
        <p className="muted small">{t.calcNote}</p>
        {boxes.map(([id, value, set]) => (
          <label key={id} className="field">
            {t.fields[id]}
            <input type="number" inputMode="decimal" min="0" value={value} onChange={(e) => set(e.target.value)} />
          </label>
        ))}

        <div className="calc-result" aria-live="polite">
          {!result && <p className="muted small">{t.privacy}</p>}
          {result && !result.ok && result.error === "referrals" && <p className="money">{t.errReferrals}</p>}
          {result?.ok && (
            <>
              {result.referralShare !== null && (
                <p>{t.referralLine(Number(fromReferrals), Number(won), percent(result.referralShare))}</p>
              )}
              {result.gap > 0 ? (
                <p className="big-line">{t.gapLine(result.gap, money(result.gapValue))}</p>
              ) : (
                <p>{t.noGapLine}</p>
              )}
              <p>{t.sprintLine(percent(result.sprintShare), result.breakEvenClients, money(SPRINT_PRICE), result.sprintShare <= 1)}</p>
              <p className="muted small">{t.calcAssumption}</p>
            </>
          )}
        </div>
      </section>

      <section>
        <h2>{t.sprintTitle}</h2>
        <p><strong>{t.priceLine}</strong></p>
        <p>{t.deliverablesIntro}</p>
        <ul>
          {t.deliverables.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <p>
          <a className="btn" href={BOOKING_URL} target="_blank" rel="noopener noreferrer">{t.cta}</a>
        </p>
        <p className="muted small">{t.ctaNote}</p>
      </section>
    </main>
  );
}
