// Fixed scoring engine. No AI: same answers always give the same result.
import type { Advice, Area, AuditPath, Option } from "./types.ts";

// Answers: question id -> chosen option value, or "dont_know".
export type Answers = Record<string, string>;

export const SHARP_FROM = 80; // an area at or above this gets no advice
export const MAX_TODAY = 3;
export const MAX_QUARTER = 2;
export const MAX_LONG = 2;

export function dontKnow(label: string): Option {
  return { value: "dont_know", label, score: 0 }; // always below any real answer
}

export type AreaResult = { area: Area; score: number };

export type Result = {
  overall: number;
  areas: AreaResult[]; // in the path's order
  weakest: AreaResult[]; // below SHARP_FROM, lowest first (ties keep path order)
};

export function scoreAnswers(path: AuditPath, answers: Answers): Result {
  const areas: AreaResult[] = path.areas.map((area) => {
    const questions = path.questions.filter((q) => q.area === area.id);
    const total = questions.reduce((sum, q) => {
      const option = q.options.find((o) => o.value === answers[q.id]);
      return sum + (option ? option.score : 0); // skipped or "dont_know" scores 0
    }, 0);
    return { area, score: questions.length ? Math.round(total / questions.length) : 0 };
  });
  const overall = Math.round(areas.reduce((s, a) => s + a.score, 0) / areas.length);
  const weakest = areas
    .map((a, i) => ({ a, i }))
    .filter(({ a }) => a.score < SHARP_FROM)
    .sort((x, y) => x.a.score - y.a.score || x.i - y.i)
    .map(({ a }) => a);
  return { overall, areas, weakest };
}

export function band(path: AuditPath, score: number): string {
  const b = path.text.bands;
  if (score < 35) return b.low;
  if (score < 65) return b.mid;
  return b.high;
}

export type Horizons = {
  today: { area: Area; text: string }[];
  quarter: { area: Area; text: string }[];
  longTerm: { area: Area; text: string }[];
};

const pick = (list: AreaResult[], n: number, key: keyof Advice) =>
  list.slice(0, n).map(({ area }) => ({ area, text: area.advice[key] }));

export function horizons(result: Result): Horizons {
  return {
    today: pick(result.weakest, MAX_TODAY, "today"),
    quarter: pick(result.weakest, MAX_QUARTER, "quarter"),
    longTerm: pick(result.weakest, MAX_LONG, "longTerm"),
  };
}

export function allAnswered(path: AuditPath, answers: Answers): boolean {
  return path.questions.every((q) => answers[q.id]);
}
