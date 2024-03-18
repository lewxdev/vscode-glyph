const { FontAssetType, OtherAssetType } = require("fantasticon");

/** @type {import("fantasticon").RunnerOptions} */
module.exports = {
  name: "glyph",
  inputDir: "static/icons",
  outputDir: "static/fonts",
  assetTypes: [OtherAssetType.JSON],
  fontTypes: [FontAssetType.WOFF],
  formatOptions: {
    json: {
      indent: 2,
    },
  },
  pathOptions: {
    json: "src/codepoints.json",
  },
};
