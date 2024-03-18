import { promises as fs } from "fs";
import path from "path";

const iconsetsDir = path.join(__dirname, "..", "iconsets");
const fileiconsDir = path.join(__dirname, "..", "fileicons");

async function main() {
  await fs
    .stat(fileiconsDir)
    .catch(() => fs.mkdir(fileiconsDir, { recursive: true }));

  for (const iconset of await fs.readdir(iconsetsDir)) {
    const filepath = path.join(iconsetsDir, iconset);
    const filename = path.basename(filepath, ".js");

    const { default: document } = await import(filepath);
    await fs.writeFile(
      path.join(fileiconsDir, `${filename}-icon-theme.json`),
      JSON.stringify(document, null, 2)
    );
  }
}

main();
