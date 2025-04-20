import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

const eslintConfig = [
    ...compat.extends("next/core-web-vitals", "next/typescript"),
    {
        ignores: [
            "node_modules",
            ".pnp",
            "**/.pnp.js",
            "coverage",
            "build",
            "**/.DS_Store",
            "**/.env.local",
            "**/.env.development.local",
            "**/.env.test.local",
            "**/.env.production.local",
            "**/npm-debug.log*",
            "**/yarn-debug.log*",
            "**/yarn-error.log*",
            "**/serviceWorker.js",
            "**/deploy",
            "**/public",
            "**/build",
            "**/posts",
            "**/node_modules",
            "**/.next",
            "**/.idea",
            "**/public",
            "**/dist",
            "**/storybook",
            "scripts/*.js",
            "scripts/**.js",
            "scripts/**/*.js",
            "public/pwa/*.min.js",
            "src/blur",
        ],
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
