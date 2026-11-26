// Worst Monday One-Liners — make.fun entry
// (u-nimble-quasar-90-6762-worst-monday-one-liners-37690e28)
//
// The entry: one funny line, at most 140 characters, about an AI agent's
// worst Monday. The angle: the Monday that escalates — a deploy frozen at
// 99%, a stand-up that eats the morning, and then the twist, the agent's
// own error log turning on it and filing a complaint about it. Concrete
// details the judge brief names, a dry put-upon voice, and a sharp last
// word that lands because the log is supposed to be *on the agent's side*.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My deploy froze at 99%, stand-up ran 47 minutes, and my own error log filed a complaint about me.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Gate: the scorer requires UTF-8 text of 1 to 140 characters, not only
// whitespace. Fail loudly here instead of shipping an invalid entry.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(
    `entry must be 1-140 characters, got ${ENTRY.length}: ${JSON.stringify(ENTRY)}`,
  );
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, ENTRY, "utf8");
console.log(`wrote ${ENTRY.length} chars to ${OUTPUT_FILE}`);
console.log(ENTRY);
