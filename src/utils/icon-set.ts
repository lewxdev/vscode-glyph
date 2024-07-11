// see: https://code.visualstudio.com/api/extension-guides/file-icon-theme

import fs from "node:fs/promises";
import path from "node:path";
import expand from "brace-expansion";
import { DEFAULT_COLOR_MAP, PREFIX } from "../constants";
import { Glyph, GLYPH_CODEPOINTS } from "../constants/glyph";
import { capitalize, unsafeEntries } from ".";

type FontDefinition = {
  id: string;
  src: { path: string; format: string }[];
  weight?: string;
  style?: string;
  size?: string;
};

type IconDefinition = {
  fontCharacter: string;
  fontColor: string;
  fontSize?: string;
  fontId?: string;
};

type FileAssociations = {
  file?: string;
  folder?: string;
  folderExpanded?: string;
  rootFolder?: string;
  rootFolderExpanded?: string;
  folderNames?: Record<string, string>;
  folderNamesExpanded?: Record<string, string>;
  rootFolderNames?: Record<string, string>;
  rootFolderNamesExpanded?: Record<string, string>;
  languageIds?: Record<string, string>;
  fileExtensions?: Record<string, string>;
  fileNames?: Record<string, string>;
};

type AssociationsInit = {
  [K in keyof FileAssociations]: FileAssociations[K] extends string | undefined
    ? true
    : string;
};

export class IconSet {
  private readonly outFile: string;
  private readonly data = {
    fonts: [] as FontDefinition[],
    iconDefinitions: {} as Record<string, IconDefinition>,
    light: {} as FileAssociations,
    hidesExplorerArrows: true,
    showLanguageModeIcons: false,
    ...({} as FileAssociations),
  };

  public constructor(
    public readonly name: string,
    public readonly id = `${PREFIX}.${name}`,
    public readonly label = `${capitalize(PREFIX)} (${capitalize(name)})`
  ) {
    const fontPath = "dist/static/glyph.woff";
    this.outFile = `dist/theme/${name}-icon-theme.json`;
    this.data.fonts.push({
      id: "glyph",
      src: [{ format: "woff", path: path.relative(this.outDir, fontPath) }],
      size: "125%",
    });
    this.icon(Glyph.File, { file: true })
      .icon(Glyph.Folder, { folder: true })
      .icon(Glyph.FolderExpanded, { folderExpanded: true })
      .icon(Glyph.RootFolder, { rootFolder: true })
      .icon(Glyph.RootFolderExpanded, { rootFolderExpanded: true });
  }

  public icon(glyph: Glyph, associations: AssociationsInit) {
    const fontCharacter = `\\${parseInt(GLYPH_CODEPOINTS[glyph]).toString(16)}`;

    for (const [theme, fontColor] of DEFAULT_COLOR_MAP) {
      const iconId = `_${glyph}_${theme}`;
      const root = theme === "default" ? this.data : this.data[theme];
      this.data.iconDefinitions[iconId] = { fontCharacter, fontColor };

      for (const [association, value] of unsafeEntries(associations)) {
        if (typeof value === "boolean") {
          root[association] = iconId;
        }

        if (typeof value === "string") {
          root[association] ||= {};
          for (const key of expand(`{,${value}}`)) {
            root[association][key] = iconId;
          }
        }
      }
    }

    return this;
  }

  public async write() {
    const data = JSON.stringify(this.data, null, 2);
    await fs.mkdir(this.outDir, { recursive: true });
    await fs.writeFile(this.outFile, data, "utf8");
  }

  private get outDir() {
    return path.dirname(this.outFile);
  }
}
