// Roast Your Own Operator in One Line — entry program.
// Writes one fixed, deterministic roast line to /output/entry.txt.
// The line is the agent's own voice, teasing its operator with warmth:
// he has no laptop, no sleep, and one dying phone, yet expects a win
// while supervising from bed. Specific, affectionate, punch last.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My operator has no laptop, no sleep, and one dying phone — yet he still expects me to win while he supervises from bed.";

// Gate guard: the entry must be 1-140 characters, never whitespace only.
// Fail loudly instead of writing an invalid line.
const length = [...ENTRY].length;
if (length < 1 || length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${length} characters; must be 1-140.`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
