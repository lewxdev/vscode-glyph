import merge from "lodash/merge";
import snakeCase from "lodash/snakeCase";

import type { IconThemeDocument } from "./types/vscode";
import type { IconInitializer } from "./types";
import { defaultColorMap, defaultDocument } from "./consts";
import codepoints from "../codepoints.json";

type Options = {
  extend?: IconThemeDocument;
  icons: [icon: IconInitializer, ...rest: IconInitializer[]];
};

export function createIconset({
  extend = defaultDocument,
  icons,
}: Options): IconThemeDocument {
  return merge(
    structuredClone(extend),
    ...icons.flatMap(([config, ...associations]) => {
      const [key, colorMap] = !Array.isArray(config)
        ? [config, defaultColorMap]
        : config;

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
}
