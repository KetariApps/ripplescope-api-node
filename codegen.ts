import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: `http://localhost:4100/graphql`,
  documents: "src/db/**/*.ts",
  generates: {
    "./src/gql/": {
      preset: "client",
      plugins: [],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: true,
};

export default config;
