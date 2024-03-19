import type { ColorMap, ColorThemeName } from "./types";
import { workspace } from "vscode";
import { IconThemeDocument } from "./types/vscode";

const COLOR_DEFAULT = "#7b7d84";
const COLOR_LIGHT = "#62646a";

export const CONFIG_SECTION_COLOR = "glyph.iconConfig";
const CONFIG_SECTION_COLOR_DEFAULT = "colorDefault";
const CONFIG_SECTION_COLOR_LIGHT = "colorLight";

const FONT_ID = "glyph";
const FONT_FORMAT = "woff";
const FONT_PATH = `../../static/fonts/${FONT_ID}.${FONT_FORMAT}`;

const THEME_DEFAULT = "default" satisfies ColorThemeName;
const THEME_LIGHT = "light" satisfies ColorThemeName;

export const defaultDocument: IconThemeDocument = {
  fonts: [
    {
      id: FONT_ID,
      src: [{ path: FONT_PATH, format: FONT_FORMAT }],
      size: "125%",
      style: "normal",
      weight: "normal",
    },
  ],
  iconDefinitions: {},
  hidesExplorerArrows: true,
};

export const getDefaultColorMap = (): ColorMap => {
  const config = workspace.getConfiguration(CONFIG_SECTION_COLOR);
  const [colorDefault, colorLight] = [
    config.get<string>(CONFIG_SECTION_COLOR_DEFAULT, COLOR_DEFAULT),
    config.get<string>(CONFIG_SECTION_COLOR_LIGHT, COLOR_LIGHT),
  ];

  return new Map([
    [THEME_DEFAULT, colorDefault],
    [THEME_LIGHT, colorLight],
  ]);
};
