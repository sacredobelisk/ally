import css from "@eslint/css";
import js from "@eslint/js";
import json from "@eslint/json";
import pluginReact from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const jsFiles = ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"];

export default defineConfig([
  { ignores: ["**/build/**", "**/node_modules/**", "package-lock.json"] },

  {
    files: jsFiles,
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  tseslint.configs.recommended,
  { ...pluginReact.configs.flat.recommended, files: jsFiles },
  { ...reactHooks.configs.flat.recommended, files: jsFiles },

  { files: ["**/*.json"], plugins: { json }, language: "json/json", extends: ["json/recommended"] },
  { files: ["**/*.jsonc"], plugins: { json }, language: "json/jsonc", extends: ["json/recommended"] },
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },

  // turn off some rules for react-router generated files
  {
    files: ["**/.react-router/**/*.ts"],
    rules: {
      semi: "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-namespace": "off",
    },
  },

  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unused-vars": "warn",
      "no-console": "warn",
      "no-empty-pattern": "warn",
      "react-hooks/preserve-manual-memoization": "off",
      "react/display-name": "off",
      "react/react-in-jsx-scope": "off",
      quotes: ["error", "double"],
      semi: ["error", "always"],
    },
  },

  // turn off some rules for react-router generated files
  {
    files: ["**/.react-router/**/*.ts"],
    rules: {
      semi: "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-namespace": "off",
    },
  },

  // turn off no-empty-pattern rule for route meta functions
  {
    files: ["**/app/routes/**/*.tsx"],
    rules: {
      "no-empty-pattern": "off",
    },
  },
]);
