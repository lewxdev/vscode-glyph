import { build } from "esbuild";

const isProduction = process.argv.includes("--production");

// see: https://code.visualstudio.com/api/working-with-extensions/bundling-extension#using-esbuild
await build({
  entryPoints: [
    "static/**/*",
    "theme/**/*",
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

if (isProduction) {
  const { createVSIX } = await import("@vscode/vsce");
  await createVSIX({ cwd: "dist" });
}
