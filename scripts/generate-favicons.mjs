/**
 * Генерирует favicon.ico, favicon.png, favicon-32.png, apple-touch-icon.png из мокапа книги.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import pngToIco from "png-to-ico";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const src = path.join(root, "public", "images", "book-mockup.png");
const pub = path.join(root, "public");

if (!fs.existsSync(src)) {
  console.error("Нет исходника:", src);
  process.exit(1);
}

await sharp(src).resize(32, 32, { fit: "cover" }).png().toFile(path.join(pub, "favicon-32.png"));
await sharp(src).resize(64, 64, { fit: "cover" }).png().toFile(path.join(pub, "favicon.png"));
await sharp(src).resize(180, 180, { fit: "cover" }).png().toFile(path.join(pub, "apple-touch-icon.png"));

const icoSizes = [16, 32, 48];
const icoBuffers = await Promise.all(
  icoSizes.map((s) => sharp(src).resize(s, s, { fit: "cover" }).png().toBuffer()),
);
const ico = await pngToIco(icoBuffers);
fs.writeFileSync(path.join(pub, "favicon.ico"), ico);

console.log("Фавиконы обновлены из public/images/book-mockup.png");
