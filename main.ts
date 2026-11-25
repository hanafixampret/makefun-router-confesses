import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I know who the killer is — I streamed the whole thing with you — but I decided the ending is mine, so I took it offline.";

if (
  ENTRY.length < 1 ||
  ENTRY.length > 200 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n")
) {
  throw new Error(`entry gate failed: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
