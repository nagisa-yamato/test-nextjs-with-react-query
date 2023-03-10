// NOTE:
// https://the-guild.dev/graphql/codegen/docs/guides/react-vue#installation
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  // https://the-guild.dev/graphql/codegen/docs/config-reference/schema-field
  schema: [
    {
      "https://stage-api.stagefam.com/graphql": {
        headers: {
          Authorization: "",
        },
      },
    },
  ],
  // https://the-guild.dev/graphql/codegen/docs/config-reference/documents-field#document-scanner
  documents: "src/**/!(*.d).{ts,tsx}",
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/graphql/generated/": {
      preset: "client",
      plugins: [],
    },
  },
  // https://the-guild.dev/graphql/codegen/docs/config-reference/lifecycle-hooks
  hooks: {
    afterOneFileWrite: ["prettier --write"],
  },
};

export default config;
