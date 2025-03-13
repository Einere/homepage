import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
      "plugin:@next/next/recommended",
    ],
    rules: {
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "never", propElementValues: "never" },
      ],
      "react/react-in-jsx-scope": "off",
    },
  }),
];

export default eslintConfig;
