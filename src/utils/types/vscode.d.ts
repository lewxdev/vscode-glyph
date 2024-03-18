/**
 * @file vscode icon set types
 * @see {@link https://github.com/microsoft/vscode/blob/ca90b8ec28d9d1fd23ed9c0afb2523ba2984b8cb/src/vs/workbench/services/themes/browser/fileIconThemeData.ts#L154-L192 | GitHub - `microsoft/vscode/src/vs/workbench/services/themes/browser/fileIconThemeData.ts`}
 * @see {@link https://code.visualstudio.com/api/extension-guides/file-icon-theme | Visual Studio Code Extension API - File Icon Theme}
 */

/** @see {@link https://code.visualstudio.com/api/extension-guides/file-icon-theme#icon-definitions | Visual Studio Code Extension API - Icon definitions} */
export type IconDefinition =
  | { iconPath: string }
  | {
      fontCharacter: string;
      fontColor: string;
      fontId?: string;
      fontSize?: string;
    };

/** @see {@link https://code.visualstudio.com/api/extension-guides/file-icon-theme#font-definitions | Visual Studio Code Extension API - Font definitions} */
export type FontDefinition = {
  id: string;
  src: { path: string; format: string }[];
  size: string;
  style: string;
  weight: string;
};

/** @see {@link https://code.visualstudio.com/api/extension-guides/file-icon-theme#file-association | Extension API - File association} */
export type FileAssociation = Record<FileAssociationKey, string> &
  Record<FileAssociationGroupKey, Record<string, string>>;

export type IconThemeDocument = FileAssociation &
  Partial<Record<ColorThemeKey, FileAssociation>> & {
    iconDefinitions: Record<string, IconDefinition>;
    fonts?: FontDefinition[];
    hidesExplorerArrows?: boolean;
    showLanguageModeIcons?: boolean;
  };

export type ColorThemeKey = "light" | "highContrast";

export type FileAssociationKey =
  | "file"
  | "folder"
  | "folderExpanded"
  | "folderNames"
  | "folderNamesExpanded"
  | "rootFolder"
  | "rootFolderExpanded";

export type FileAssociationGroupKey =
  | "rootFolderNames"
  | "rootFolderNamesExpanded"
  | "languageIds"
  | "fileExtensions"
  | "fileNames";
