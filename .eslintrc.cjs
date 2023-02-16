module.exports = {
  overrides: [
    {
      files: ["*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}"],
      extends: [
        "next/core-web-vitals",
        // https://typescript-eslint.io/getting-started
        "plugin:@typescript-eslint/recommended",
        // https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query
        "plugin:@tanstack/eslint-plugin-query/recommended",
        // https://prettier.io/docs/en/integrating-with-linters.html
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
    },
    // https://typescript-eslint.io/linting/typed-linting
    // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-telling-me-eslint-was-configured-to-run--however-that-tsconfig-does-not--none-of-those-tsconfigs-include-this-file
    // https://stackoverflow.com/a/64488474/19817169
    {
      files: "*.{ts,cts,mts,tsx}",
      extends: [
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
      rules: {
        "@typescript-eslint/no-misused-promises": [
          "error",
          {
            checksVoidReturn: {
              attributes: false,
              arguments: false,
            },
          },
        ],
      },
    },
    // https://the-guild.dev/graphql/eslint/docs/getting-started
    // https://github.com/B2o5T/graphql-eslint/issues/1133#issuecomment-1230345732
    // FIXME:
    // https://github.com/B2o5T/graphql-eslint/issues/1091
    // HACK:
    // vscode-eslintが使うNode.jsのruntimeを明示的に指定してあげてください(workspace設定推奨)
    // https://github.com/microsoft/vscode-eslint/issues/1485
    {
      files: "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}",
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      parserOptions: {
        operations: "./src/**/*.(ts|tsx)",
        schema: "https://stage-api.stagefam.com/graphql",
        schemaOptions: {
          headers: {
            Authorization: "",
          },
        },
      },
    },
  ],
};
