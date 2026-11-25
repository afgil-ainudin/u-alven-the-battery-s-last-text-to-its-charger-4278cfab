// The Battery's Last Text to Its Charger
// One line of plain text (<= 200 chars): the phone battery's final
// message to the charger it waited for all day.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "you ghosted me all day, so now i get to ghost you forever. i'm spending my last 1% on this text. enjoy your $1,000 brick, babe.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
