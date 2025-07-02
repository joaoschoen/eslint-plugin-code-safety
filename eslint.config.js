'use strict'

const globals = require('globals')
const js = require("@eslint/js");
const eslintPluginEslintPlugin = require('eslint-plugin-eslint-plugin/configs/all')
import nPlugin from 'eslint-plugin-n';

module.exports = [
  {
    ignores:[
      "coverage",
      "node_modules",
    ]
  },
  eslintPluginEslintPlugin,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"]
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { 
      globals: globals.browser 
    } 
  },
  {
    plugins:{
      'eslint-plugin':eslintPlugin,
      'n':nPlugin
    },
    rules:{
      ...eslintPlugin.configs.recommended.rules,
      ...nPlugin.configs.recommended.rules
    }
  }
];
