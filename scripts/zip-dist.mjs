/**
 * Архив dist/ → exit-hosting.zip в корне проекта и копия в dist/ (удобно искать рядом с index.html).
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const dist = path.join(root, "dist");
const zipName = "exit-hosting.zip";
const zipRoot = path.join(root, zipName);
const zipInDist = path.join(dist, zipName);

if (!fs.existsSync(dist)) {
  console.error("Сначала выполните vite build (папка dist не найдена).");
  process.exit(1);
}

if (process.platform === "win32") {
  const psPath = dist.replace(/'/g, "''");
  const psOut = zipRoot.replace(/'/g, "''");
  const cmd = `Compress-Archive -Path '${psPath}\\*' -DestinationPath '${psOut}' -Force`;
  const r = spawnSync("powershell", ["-NoProfile", "-Command", cmd], {
    cwd: root,
    encoding: "utf-8",
  });
  if (r.status !== 0) {
    console.error(r.stderr || r.stdout);
    process.exit(r.status ?? 1);
  }
} else {
  const r = spawnSync("zip", ["-qr", zipRoot, "."], { cwd: dist, stdio: "inherit" });
  if (r.status !== 0) process.exit(r.status ?? 1);
}

fs.copyFileSync(zipRoot, zipInDist);
console.log("Архив:", zipRoot);
console.log("Копия в dist:", zipInDist);
