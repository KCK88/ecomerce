import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import {defineConfig} from "eslint/config";


export default defineConfig([
  {files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], plugins: {js}, extends: ["js/recommended"]},
  {files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], languageOptions: {globals: globals.browser}},
  {
    files: ['**/*.js'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
    },
  },
  tseslint.configs.recommended,
]);
