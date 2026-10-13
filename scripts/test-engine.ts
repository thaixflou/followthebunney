// Run: node --experimental-strip-types scripts/test-engine.ts
import assert from "node:assert/strict";
import { PATHS } from "../lib/paths.ts";
import { toCsv } from "../lib/csv.ts";
import { funnel } from "../lib/funnel.ts";
import { allAnswered, horizons, scoreAnswers, type Answers } from "../lib/engine.ts";

for (const path of PATHS) {
  const ids = new Set(path.areas.map((a) => a.id));
  for (const q of path.questions) {
    assert(ids.has(q.area), `${path.id}/${q.id}: unknown area ${q.area}`);
    const scores = q.options.map((o) => o.score);
    assert(scores.every((s, i) => i === 0 || s <= scores[i - 1]), `${q.id}: options must go strongest first`);
    assert(Math.min(...scores) > 0, `${q.id}: a real answer must score above "dont_know" (0)`);
  }
  for (const a of path.areas) assert(path.questions.some((q) => q.area === a.id), `${a.id}: area has no questions`);

  const best: Answers = Object.fromEntries(path.questions.map((q) => [q.id, q.options[0].value]));
  const worst: Answers = Object.fromEntries(path.questions.map((q) => [q.id, q.options[q.options.length - 1].value]));
  const unknown: Answers = Object.fromEntries(path.questions.map((q) => [q.id, "dont_know"]));

  assert(allAnswered(path, best));
  assert(!allAnswered(path, {}));
  assert.equal(scoreAnswers(path, best).overall, 100);
  assert.equal(scoreAnswers(path, best).weakest.length, 0, "a perfect run has nothing to fix");
  assert.equal(scoreAnswers(path, unknown).overall, 0);
  assert(scoreAnswers(path, worst).overall > scoreAnswers(path, unknown).overall, '"dont_know" must score below any real answer');
  assert.deepEqual(scoreAnswers(path, worst), scoreAnswers(path, worst), "same answers, same result");

  const h = horizons(scoreAnswers(path, unknown));
  assert.equal(h.today.length, 3);
  assert.equal(h.quarter.length, 2);
  console.log(`${path.id}: ok`);
}

const csv = toCsv(["a", "b;c"], [['x"y', "line\nbreak"]]);
assert(csv.startsWith("\uFEFF"));
assert(csv.includes('"b;c"') && csv.includes('"x""y"') && csv.includes('"line\nbreak"'));
for (const path of PATHS) assert(path.template.examples.every((r) => r.length === path.template.columns.length), "example rows must match columns");
console.log("csv: ok");

// Funnel: leads 100 -> conversations 20 -> proposals 10 -> won 5, project worth 1000.
const f = funnel([100, 20, 10, 5], 1000);
assert(f.ok);
if (f.ok) {
  assert.deepEqual(f.steps.map((s) => s.rate), [0.2, 0.5, 0.5]);
  assert.equal(f.weakest.from, 0);
  assert.equal(f.oneProjectPerYear, 4000);
  // One point on the first step: 100 * 0.01 = 1 more conversation, each worth 5/20 = 0.25 wins.
  assert.equal(f.weakest.extraWinsPerPoint, 0.25);
  assert.equal(f.valuePerPoint(f.weakest), 0.25 * 1000 * 4);
  // One point on the last step: 10 * 0.01 = 0.1 wins.
  assert(Math.abs(f.steps[2].extraWinsPerPoint - 0.1) < 1e-9);
}
assert.deepEqual(funnel([10, 20], 100), { ok: false, error: "order" });
assert.deepEqual(funnel([0, 0, 0], 100), { ok: false, error: "empty" });
assert.deepEqual(funnel([10, -1], 100), { ok: false, error: "empty" });
assert.equal(funnel([10, 0, 0], 100).ok, true, "zero wins is a valid funnel");
for (const path of PATHS) if (path.calculator) assert(path.calculator.stages.length >= 2, `${path.id}: calculator needs two stages`);
console.log("funnel: ok");
