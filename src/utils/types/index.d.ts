import type {
  ColorThemeKey,
  FileAssociationGroupKey,
  FileAssociationKey,
} from "./vscode";

import type codepoints from "../../codepoints.json";

export type CodepointKey = keyof typeof codepoints;

export type ColorMap = Map<"default" | ColorThemeKey, string>;

export type IconAssociation =
  | [group: FileAssociationGroupKey, value: string, ...rest: string[]]
  | FileAssociationKey;

export type IconInitializer = [
  config: CodepointKey | [key: CodepointKey, colorMap: ColorMap],
  association: IconAssociation,
  ...rest: IconAssociation[]
];
