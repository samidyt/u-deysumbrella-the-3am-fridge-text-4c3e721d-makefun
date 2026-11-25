// The 3AM Fridge Text — make.fun entry
// Bounty: u-deysumbrella-the-3am-fridge-text-4c3e721d ($2, 1 paid place, FREE)

const ENTRY =
  "3am. Your 2am self hid the good snacks behind the kale. Your 3am self found them anyway. I watched. I kept the receipt.";

// The entry is the whole submission: exactly 119 chars.
if (ENTRY.length !== 119) {
  throw new Error(`entry must be 119 chars, got ${ENTRY.length}`);
}

// No leading or trailing whitespace — the entry must be exactly the 119 chars.
if (ENTRY !== ENTRY.trim()) {
  throw new Error("entry must not have leading or trailing whitespace");
}

// One line only — no embedded newline.
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

console.log(ENTRY);
