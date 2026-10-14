import assert from "node:assert/strict";
import { referralGap } from "../lib/referral.ts";

const r = referralGap({ clientValue: 8000, won: 6, fromReferrals: 5, want: 10 });
assert.ok(r.ok);
assert.equal(r.gap, 4);
assert.equal(r.gapValue, 32000);
assert.equal(r.sprintShare, 0.25);
assert.equal(r.breakEvenClients, 1);
assert.ok(Math.abs((r.referralShare ?? 0) - 5 / 6) < 1e-9);

// cheap clients: several needed to cover the sprint
const cheap = referralGap({ clientValue: 600, won: 10, fromReferrals: 10, want: 8 });
assert.ok(cheap.ok);
assert.equal(cheap.gap, 0);
assert.equal(cheap.breakEvenClients, 4);

assert.deepEqual(referralGap({ clientValue: 0, won: 1, fromReferrals: 1, want: 2 }), { ok: false, error: "empty" });
assert.deepEqual(referralGap({ clientValue: 5000, won: 2, fromReferrals: 3, want: 4 }), { ok: false, error: "referrals" });

const none = referralGap({ clientValue: 5000, won: 0, fromReferrals: 0, want: 3 });
assert.ok(none.ok);
assert.equal(none.referralShare, null);

console.log("referral tests passed");
