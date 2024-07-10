import { build } from "esbuild";
import * as themes from "../src/themes";

const isProduction = process.argv.includes("--production");

// see: https://aka.ms/vscode-bundle-extension#using-esbuild
await build({
  entryPoints: [
    "static/*",
    "src/extension.ts",
    "package.json",
    "package.nls.json",
    "CHANGELOG.md",
    "LICENSE.md",
    "README.md",
  ],
  loader: {
    ".json": "copy",
    ".md": "copy",
    ".png": "copy",
    ".svg": "copy",
    ".woff": "copy",
  },
  outdir: "dist",
  external: ["vscode"],
  format: "cjs",
  platform: "node",
  bundle: true,
  sourcesContent: false,
  minify: isProduction,
  sourcemap: !isProduction,
});

await Array.fromAsync(Object.values(themes), async (theme) => {
  await theme.write();
});

if (isProduction) {
  const { createVSIX } = await import("@vscode/vsce");
  await createVSIX({ cwd: "dist", dependencies: false });
}
