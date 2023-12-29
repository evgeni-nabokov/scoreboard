module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
        "plugin:css/recommended",
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
            },
        },
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["@typescript-eslint", "react", "@stylistic/js", "css"],
    rules: {
        indent: ["error", 4],
        "object-curly-spacing": [
            "error",
            "always",
            { arraysInObjects: true, objectsInObjects: false },
        ],
        quotes: ["error", "double"],
        "no-multi-spaces": ["error"],
    },
};
