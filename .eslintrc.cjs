// NOTE:
// https://prettier.io/docs/en/integrating-with-linters.html
// https://typescript-eslint.io/getting-started
// https://typescript-eslint.io/linting/typed-linting
// https://tanstack.com/query/v4/docs/react/eslint/eslint-plugin-query
// https://the-guild.dev/graphql/eslint/docs/getting-started
// https://github.com/B2o5T/graphql-eslint/issues/1133#issuecomment-1230345732
// FIXME:
// https://github.com/B2o5T/graphql-eslint/issues/1091
module.exports = {
  overrides: [
    {
      files: "*.[jt]s?(x)",
      extends: [
        "next/core-web-vitals",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:@tanstack/eslint-plugin-query/recommended",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      plugins: ["@typescript-eslint"],
      parserOptions: {
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
      },
    },
    {
      files: "*.[jt]s?(x)",
      processor: "@graphql-eslint/graphql",
    },
    {
      files: ["*.graphql"],
      extends: "plugin:@graphql-eslint/operations-recommended",
      parserOptions: {
        operations: "./src/**/*.(ts|tsx)",
        schema: [
          "https://rickandmortyapi.com/graphql",
          "https://stage-api.stagefam.com/graphql",
        ],
        schemaOptions: {
          headers: {
            Authorization: "",
          },
        },
      },
    },
  ],
};
