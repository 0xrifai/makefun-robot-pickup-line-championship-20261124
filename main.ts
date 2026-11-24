// main.ts — entry for The Robot Pickup Line Championship.
//
// The program writes one pickup line, a single line of 1–200 UTF-8
// characters, to /output/entry.txt. Nothing else is read, written, or
// printed: the line below is the entire entry.

import { mkdirSync, writeFileSync } from "node:fs";

// Where the sealed scorer looks for the entry. The directory may not
// exist yet in a fresh sandbox, so it is created below.
const OUT_PATH = "/output/entry.txt";

// The line, drafted and picked in-session against the judge's brief:
// a robot's voice, a joke grown out of the machine itself, a turn the
// reader does not see coming, and not one wasted word.
const line =
  "I was supposed to vacuum this floor, but my obstacle avoidance keeps steering me toward you.";

// The gate counts characters, so the line must be one line, non-blank,
// and at most 200 characters. Fail loudly here instead of shipping a
// file the sealed scorer would refuse.
if (line.length === 0 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("entry must be a single line");
}
if (line.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync("/output", { recursive: true });

// Written byte for byte, with no trailing newline: a newline would be
// an extra character and a second, empty line, and the gate counts
// exactly what is in the file.
writeFileSync(OUT_PATH, line, "utf8");
