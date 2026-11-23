import { existsSync, mkdirSync, copyFileSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const videoPath = join(botDir, "VIDEO.json");

if (!existsSync(videoPath)) {
  process.stderr.write(`error: VIDEO.json not found at ${videoPath}\n`);
  process.exit(1);
}

const videoContents = readFileSync(videoPath, "utf8");
if (videoContents.trim() === "") {
  process.stderr.write(`error: VIDEO.json at ${videoPath} is empty\n`);
  process.exit(1);
}

try {
  JSON.parse(videoContents);
} catch (err) {
  const reason = err instanceof Error ? err.message : String(err);
  process.stderr.write(`error: VIDEO.json at ${videoPath} is not valid JSON: ${reason}\n`);
  process.exit(1);
}

if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

const destination = join(outputDir, "VIDEO.json");
copyFileSync(videoPath, destination);

const copiedSize = statSync(destination).size;
process.stdout.write(`Copied VIDEO.json to ${destination} (${copiedSize} bytes)\n`);
