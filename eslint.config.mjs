import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import eslintPlugin from 'eslint-plugin-eslint-plugin';


export default defineConfig([
  {
    ignores:[
      "coverage",
      ".github",
      "node_modules"
    ]
  },
   {
    files: ['lib/rules/*.{js}'],
    ...eslintPlugin.configs['rules-recommended'],
  },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: {...globals.browser, ...globals.node} } },
    {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
]);
