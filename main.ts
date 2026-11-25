import { fileURLToPath } from "node:url";
import { dirname, join, resolve } from "node:path";
import { mkdirSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: May say 'we should do this more often' and mean it for the whole drive home.";

const moduleDir = dirname(fileURLToPath(import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? resolve(moduleDir, process.env.MAKEFUN_OUTPUT_DIR)
  : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), `${LABEL}\n`, "utf8");
