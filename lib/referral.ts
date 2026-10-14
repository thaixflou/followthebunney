// Referral gap arithmetic on the person's own numbers. No benchmarks, no assumptions.

export const SPRINT_PRICE = 2000; // USD, flat

export type GapInput = {
  clientValue: number; // what a new client pays in their first year
  won: number; // clients won in the last 12 months
  fromReferrals: number; // of those, how many came from referrals
  want: number; // clients wanted in the next 12 months
};

export type GapResult =
  | { ok: false; error: "empty" | "referrals" }
  | {
      ok: true;
      gap: number; // extra clients wanted per year, 0 if the target is not above what was won
      gapValue: number; // gap x client value, per year
      referralShare: number | null; // 0..1, null when nothing was won
      sprintShare: number; // sprint price as a share of one client's value (1 = one whole client)
      breakEvenClients: number; // whole clients that cover the sprint price
    };

export function referralGap({ clientValue, won, fromReferrals, want }: GapInput): GapResult {
  const nums = [clientValue, won, fromReferrals, want];
  if (nums.some((n) => !Number.isFinite(n) || n < 0) || !(clientValue > 0)) return { ok: false, error: "empty" };
  if (fromReferrals > won) return { ok: false, error: "referrals" };

  const gap = Math.max(0, want - won);
  return {
    ok: true,
    gap,
    gapValue: gap * clientValue,
    referralShare: won > 0 ? fromReferrals / won : null,
    sprintShare: SPRINT_PRICE / clientValue,
    breakEvenClients: Math.ceil(SPRINT_PRICE / clientValue),
  };
}
