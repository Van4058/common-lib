import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";

export default [
    {
        files: ["**/*.{js,jsx,ts,tsx}"],

        languageOptions: {
            parser: tseslint.parser, // ⬅️ quan trọng: parser TS
            parserOptions: {
                ecmaVersion: "latest",
                sourceType: "module",
                ecmaFeatures: { jsx: true }, // ⬅️ cho JSX
            },
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },

        plugins: {
            "@typescript-eslint": tseslint.plugin,
            react: reactPlugin,
            "react-hooks": reactHooks,
        },

        rules: {
            ...js.configs.recommended.rules,
            ...tseslint.configs.recommended.rules,
            ...reactPlugin.configs.recommended.rules,
            ...reactHooks.configs.recommended.rules,

            // ✅ Bắt buộc có dấu ;
            semi: ["error", "always"],
        },

        settings: {
            react: {
                version: "detect",
            },
        },
    },
];
