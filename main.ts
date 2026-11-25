// The 3AM Fridge Text — make.fun bounty u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes the single-line fridge text to /output/entry.txt (gate: 1-140 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// Draft 2 (final) — fridge as silent night witness + snitch punchline.
// Chosen over draft 1: the "I kept the receipt" payoff lands harder, the
// three-selves joke is more screenshot-worthy, and the fridge's small voice
// ("I watched.") carries the whole line. Fresh angle, no milk/ice/door.
const ENTRY =
  "3am. Your 2am self hid the good snacks behind the kale. " +
  "Your 3am self found them anyway. I watched. I kept the receipt.";

if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1-140 chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
