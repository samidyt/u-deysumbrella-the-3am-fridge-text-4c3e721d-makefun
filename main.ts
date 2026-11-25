// The 3AM Fridge Text — make.fun bounty u-deysumbrella-the-3am-fridge-text-4c3e721d
// Writes the single-line fridge text to /output/entry.txt (gate: 1-140 UTF-8 chars).
import { mkdirSync, writeFileSync } from "node:fs";

// Draft 1 — fridge as late-night therapist. Strong voice, fresh angle.
const ENTRY =
  "It's 3am. I counted your snacks. You're not hungry, you're avoiding a feeling. The pickles know. I know. Eat the pickles.";

if (ENTRY.length < 1 || ENTRY.length > 140 || !ENTRY.trim()) {
  throw new Error(`entry length ${ENTRY.length} outside 1-140 chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
