import type { ExtensionContext } from "vscode";
import { workspace } from "vscode";

import { buildAllIconSets } from "./build/iconsets";
import { CONFIG_SECTION_COLOR } from "./utils/constants";

export async function activate(context: ExtensionContext) {
  const PREFIX = `[${context.extension.id}]`;

  console.info(PREFIX, "extension activated; building iconsets...");
  await buildAllIconSets();

  const handleChange = workspace.onDidChangeConfiguration(async (event) => {
    if (!event.affectsConfiguration(CONFIG_SECTION_COLOR)) return;

    console.info(PREFIX, "configuration changed; rebuilding iconsets...");
    await buildAllIconSets();
  });

  context.subscriptions.push(handleChange);
}
