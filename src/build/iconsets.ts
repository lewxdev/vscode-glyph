import { promises as fs } from "fs";
import path from "path";
import merge from "lodash/merge";
import snakeCase from "lodash/snakeCase";

import codepoints from "../codepoints.json";
import { defaultDocument, getDefaultColorMap } from "../utils/constants";
import type { IconThemeDocument } from "../utils/types/vscode";
import type { IconInitializer } from "../utils/types";

type CreateBuilderOptions = {
  extend?: IconThemeDocument;
  icons: [icon: IconInitializer, ...rest: IconInitializer[]];
};

export function createIconSetBuilder({
  extend: document = defaultDocument,
  icons,
}: CreateBuilderOptions) {
  return function buildIconSet(): IconThemeDocument {
    const colorMap = getDefaultColorMap();
    return merge(
      document,
      ...icons.flatMap(([key, ...associations]) => {
        return Array.from(colorMap).flatMap(([theme, fontColor]) => {
          const fontCharacter = `\\${codepoints[key].toString(16)}`;
          const iconName = `_${snakeCase(`${key}_${theme}`)}`;

          const fromSource = (source: Partial<IconThemeDocument>) => ({
            iconDefinitions: { [iconName]: { fontCharacter, fontColor } },
            ...(theme === "default" ? source : { [theme]: source }),
          });

          return associations.map((association) => {
            if (!Array.isArray(association)) {
              return fromSource({ [association]: iconName });
            }

            const [group, ...ids] = association;
            return fromSource({
              [group]: Object.fromEntries(ids.map((id) => [id, iconName])),
            });
          });
        });
      })
    );
  };
}

export const buildAllIconSets = async () => {
  const iconSetsDir = path.join(__dirname, "..", "iconsets");
  const fileIconsDir = path.join(__dirname, "..", "fileicons");

  await fs
    .stat(fileIconsDir)
    .catch(() => fs.mkdir(fileIconsDir, { recursive: true }));

  for (const iconSet of await fs.readdir(iconSetsDir)) {
    const filepath = path.join(iconSetsDir, iconSet);
    const filename = path.basename(filepath, ".js");

    const { default: buildIconSet } = (await import(filepath)) as {
      default: () => IconThemeDocument;
    };

    await fs.writeFile(
      path.join(fileIconsDir, `${filename}-icon-theme.json`),
      JSON.stringify(buildIconSet(), null, 2)
    );
  }
};
