import assert from "node:assert/strict";
import { referralGap } from "../lib/referral.ts";

const r = referralGap({ clientValue: 8000, won: 6, fromReferrals: 5, want: 10 });
assert.equal(r.error, null);
assert.equal(r.gap, 4);
assert.equal(r.gapValue, 32000);
assert.equal(r.gapPerMonth, 4 / 12);
assert.equal(r.sprintShare, 0.25);
assert.equal(r.breakEvenClients, 1);
assert.ok(Math.abs((r.referralShare ?? 0) - 5 / 6) < 1e-9);

// cheap clients: several needed to cover the sprint
const cheap = referralGap({ clientValue: 600, won: 10, fromReferrals: 10, want: 8 });
assert.equal(cheap.gap, 0);
assert.equal(cheap.gapValue, 0);
assert.equal(cheap.breakEvenClients, 4);

// partial input: each result shows up as soon as its numbers exist
const onlyValue = referralGap({ clientValue: 5000 });
assert.equal(onlyValue.sprintShare, 0.4);
assert.equal(onlyValue.gap, null);
assert.equal(onlyValue.referralShare, null);

const noValue = referralGap({ won: 4, want: 9 });
assert.equal(noValue.gap, 5);
assert.equal(noValue.gapValue, null);
assert.equal(noValue.sprintShare, null);

// more referrals than clients won is an error and hides the share
const bad = referralGap({ clientValue: 5000, won: 2, fromReferrals: 3, want: 4 });
assert.equal(bad.error, "referrals");
assert.equal(bad.referralShare, null);

// nothing won: no referral share, gap is the whole target
const none = referralGap({ clientValue: 5000, won: 0, fromReferrals: 0, want: 3 });
assert.equal(none.referralShare, null);
assert.equal(none.gap, 3);

// zero or negative client value gives no sprint comparison
assert.equal(referralGap({ clientValue: 0 }).sprintShare, null);
assert.equal(referralGap({ clientValue: -5 }).sprintShare, null);

console.log("referral tests passed");
