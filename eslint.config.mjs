/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

import prettier from "eslint-plugin-prettier";
import jsxA11y from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends(
        "next/core-web-vitals",
        "next/typescript",
        "plugin:prettier/recommended",
    ),
    {
        plugins: {
            "jsx-a11y": jsxA11y,
            prettier,
        },
        ignores: ["node_modules", "dist", "build", "out"],
        rules: {
            "import/order": [
                "warn",
                {
                    groups: [
                        "object",
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                    ],
                    alphabetize: {
                        order: "asc",
                        caseInsensitive: true,
                    },
                    "newlines-between": "always",
                },
            ],
            // jsx-a11y rules for accessibility
            "jsx-a11y/alt-text": "warn",
            "jsx-a11y/aria-props": "warn",
            "jsx-a11y/aria-proptypes": "warn",
            "jsx-a11y/aria-unsupported-elements": "warn",
            "jsx-a11y/role-has-required-aria-props": "warn",
            "jsx-a11y/role-supports-aria-props": "warn",
            // Avoid hardcoded labels
            "react/jsx-no-literals": "error",
            // Avoid using next/link, use next/navigation instead
            "no-restricted-imports": [
                "error",
                {
                    name: "next/link",
                    message: "Please import from `@/i18n/navigation` instead.",
                },
                {
                    name: "next/navigation",
                    importNames: [
                        "redirect",
                        "permanentRedirect",
                        "useRouter",
                        "usePathname",
                    ],
                    message: "Please import from `@/i18n/navigation` instead.",
                },
            ],
        },
    },
];

export default eslintConfig;
