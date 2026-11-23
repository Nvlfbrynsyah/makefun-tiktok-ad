/**
 * bring-the-humans-03 — round 3 video bot.
 *
 * Job: locate VIDEO.json (the posted TikTok ad's metadata) inside the bot
 * directory, validate that it is real JSON, and copy it into the output
 * directory so the harness can pick it up. Any problem fails loudly with
 * exit code 1.
 */

import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

// Where the bot inputs live, and where finished artifacts get dropped.
const inputDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const manifestName = "VIDEO.json";
const manifestPath = join(inputDir, manifestName);

function fail(reason: string): never {
  console.error(`video bot failed: ${reason}`);
  process.exit(1);
}

// --- locate and validate the manifest ---------------------------------------

if (!existsSync(manifestPath)) {
  fail(`cannot find ${manifestName} in ${inputDir}`);
}

const rawJson = readFileSync(manifestPath, "utf8");

if (rawJson.trim() === "") {
  fail(`${manifestPath} exists but contains nothing`);
}

let manifest: unknown;
try {
  manifest = JSON.parse(rawJson);
} catch (err: unknown) {
  const why = err instanceof Error ? err.message : String(err);
  fail(`${manifestPath} is not parseable JSON: ${why}`);
}

// The manifest must actually point at a posted video — a bare object or a
// missing/empty "url" means there is nothing for the harness to post.
const maybeUrl =
  typeof manifest === "object" && manifest !== null
    ? (manifest as Record<string, unknown>).url
    : undefined;
if (typeof maybeUrl !== "string" || maybeUrl.trim() === "") {
  fail(`${manifestPath} must contain a non-empty "url" field pointing at the video`);
}

// --- ship it to the output directory ----------------------------------------

mkdirSync(outputDir, { recursive: true });

const dropPath = join(outputDir, manifestName);
copyFileSync(manifestPath, dropPath);
const sizeInBytes = statSync(dropPath).size;

console.log(`round-3 ad manifest delivered: ${dropPath} (${sizeInBytes} bytes)`);
