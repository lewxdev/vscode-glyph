import type { IconThemeDocument } from "./types/vscode";
import type { ColorMap } from "./types";

const COLOR_DEFAULT = "#7b7d84";
const COLOR_LIGHT = "#62646a";

export const FONT_ID = "glyph";
export const FONT_FORMAT = "woff";

export const defaultColorMap: ColorMap = new Map([
  ["default", COLOR_DEFAULT],
  ["light", COLOR_LIGHT],
]);

export const defaultDocument: IconThemeDocument = {
  fonts: [
    {
      id: FONT_ID,
      src: [
        {
          path: `../../static/fonts/${FONT_ID}.${FONT_FORMAT}`,
          format: FONT_FORMAT,
        },
      ],
      size: "125%",
      style: "normal",
      weight: "normal",
    },
  ],
  iconDefinitions: {},
  hidesExplorerArrows: true,
};
