// Referral gap arithmetic on the person's own numbers. No benchmarks, no assumptions.
// Every input may be left blank (undefined); each result appears as soon as the numbers it needs are there.

export const SPRINT_PRICE = 2000; // USD, flat

export type GapInput = {
  clientValue?: number; // what a new client pays in their first year
  won?: number; // clients won in the last 12 months
  fromReferrals?: number; // of those, how many came from referrals
  want?: number; // clients wanted in the next 12 months
};

export type GapResult = {
  error: "referrals" | null; // referrals can't exceed clients won
  referralShare: number | null; // 0..1; needs won > 0 and fromReferrals
  gap: number | null; // extra clients wanted per year, 0 if the target is not above what was won; needs won and want
  gapValue: number | null; // gap x client value, per year; needs gap and clientValue
  gapPerMonth: number | null; // gap / 12
  sprintShare: number | null; // sprint price as a share of one client's value (1 = one whole client); needs clientValue > 0
  breakEvenClients: number | null; // whole clients that cover the sprint price
};

const valid = (n: number | undefined): n is number => n !== undefined && Number.isFinite(n) && n >= 0;

export function referralGap(input: GapInput): GapResult {
  const { clientValue, won, fromReferrals, want } = input;
  const hasValue = valid(clientValue) && clientValue > 0;
  const error = valid(won) && valid(fromReferrals) && fromReferrals > won ? "referrals" : null;
  const gap = valid(won) && valid(want) ? Math.max(0, want - won) : null;

  return {
    error,
    referralShare: !error && valid(won) && won > 0 && valid(fromReferrals) ? fromReferrals / won : null,
    gap,
    gapValue: gap !== null && hasValue ? gap * clientValue : null,
    gapPerMonth: gap !== null ? gap / 12 : null,
    sprintShare: hasValue ? SPRINT_PRICE / clientValue : null,
    breakEvenClients: hasValue ? Math.ceil(SPRINT_PRICE / clientValue) : null,
  };
}
