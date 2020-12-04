module.exports = {
    plugins: ["@babel", "prettier"],
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "airbnb-base",
        "plugin:prettier/recommended",
    ],
    parser: "@babel/eslint-parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        allowImportExportEverywhere: false,
        ecmaFeatures: {
            globalReturn: false,
        },
        babelOptions: {
            configFile: "./babel.config.json",
        },
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "func-names": ["error", "never"],
        "no-undef": ["error", { typeof: true }],
        "comma-dangle": ["error", "only-multiline"],
        "no-cond-assign": ["error", "always"],
        "no-console": "off",
        "@babel/new-cap": "error",
        "@babel/no-invalid-this": "error",
        "@babel/no-unused-expressions": "error",
        "@babel/object-curly-spacing": "error",
        "@babel/semi": "error",
    },
};
