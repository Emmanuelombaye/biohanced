/**
 * One-off: trim gray studio margins from product vial PNGs.
 * Run: node scripts/trim-vial-images.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const productsDir = path.join("public", "biohanced", "products");
const files = fs.readdirSync(productsDir).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const input = path.join(productsDir, file);
  const buffer = await sharp(input).trim({ threshold: 12 }).png().toBuffer();
  await sharp(buffer).toFile(input);
  console.log(`trimmed ${file}`);
}
