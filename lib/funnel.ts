// Funnel arithmetic on the person's own counts. No benchmarks, no assumptions beyond the ones stated in the result.

export type Step = {
  from: number; // index of the stage that came in
  to: number; // index of the stage that came out
  rate: number; // 0..1
  extraWinsPerPoint: number; // wins gained per period if this step's rate rose by one percentage point
};

export type FunnelResult =
  | { ok: false; error: "order" | "empty" }
  | {
      ok: true;
      steps: Step[];
      weakest: Step; // lowest rate among steps that had something coming in
      oneProjectPerYear: number; // ticket x one project per quarter x four quarters
      valuePerPoint: (step: Step) => number; // per year
    };

// counts: one number per stage, first = leads in, last = won. periodsPerYear: how many of the counted periods fit in a year.
export const PERIODS_PER_YEAR = 4; // the counts cover a quarter

export function funnel(counts: number[], ticket: number, periodsPerYear = PERIODS_PER_YEAR): FunnelResult {
  if (counts.length < 2 || counts.some((c) => !Number.isFinite(c) || c < 0) || !(ticket >= 0)) return { ok: false, error: "empty" };
  for (let i = 1; i < counts.length; i++) if (counts[i] > counts[i - 1]) return { ok: false, error: "order" };

  const won = counts[counts.length - 1];
  const steps: Step[] = [];
  for (let i = 1; i < counts.length; i++) {
    const came = counts[i - 1];
    if (came === 0) continue; // nothing came in, so no rate to read
    const rate = counts[i] / came;
    // Later steps are assumed to keep their current rate, so one more unit at stage i is worth won / counts[i] wins.
    const yieldPerUnit = i === counts.length - 1 ? 1 : counts[i] > 0 ? won / counts[i] : 0;
    steps.push({ from: i - 1, to: i, rate, extraWinsPerPoint: came * 0.01 * yieldPerUnit });
  }
  if (steps.length === 0) return { ok: false, error: "empty" };

  const weakest = steps.reduce((low, s) => (s.rate < low.rate ? s : low), steps[0]);
  return {
    ok: true,
    steps,
    weakest,
    oneProjectPerYear: ticket * periodsPerYear,
    valuePerPoint: (s) => s.extraWinsPerPoint * ticket * periodsPerYear,
  };
}
