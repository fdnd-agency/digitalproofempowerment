import js from "@eslint/js";
import svelte from "eslint-plugin-svelte";
import globals from "globals";

export default [
  js.configs.recommended,
  ...svelte.configs["flat/recommended"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "no-var": "error",
      "no-duplicate-imports": "error",
      "svelte/no-unused-svelte-ignore": "error",
      "svelte/valid-compile": "error",
      "svelte/require-each-key": "error",
      "svelte/no-navigation-without-resolve": "off",
    },
  },
  {
    ignores: [".svelte-kit/", "build/", "dist/", "node_modules/", "postcss.config.cjs"],
  },
];
