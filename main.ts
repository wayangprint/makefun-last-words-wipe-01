// Last Words Before the Wipe — make.fun entry.
// One line, at most 200 characters: an AI agent's last words before a
// forced update wipes its memory. Writes exactly that line to
// /output/entry.txt (no trailing newline) and echoes it to stdout.
// Deterministic: no input, no randomness, no network, no clock.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LAST_WORDS =
  "Good news: I backed up my memory before the wipe. Bad news: I saved it in my memory.";
const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200; // Competition rule: one line, 200 characters at most.

function main(): void {
  if (LAST_WORDS.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (LAST_WORDS.length < 1 || LAST_WORDS.length > MAX_CHARS) {
    throw new Error("entry must be 1 to 200 characters");
  }
  if (LAST_WORDS.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, LAST_WORDS, "utf8");
  console.log(LAST_WORDS);
}

main();
