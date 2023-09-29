import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: `http://localhost:4100/graphql`,
  documents: 'src/db/**/*.ts',
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
    'introspection.json': {
      plugins: ['introspection'],
      config: {
        minify: true,
      },
    },
  },
  emitLegacyCommonJSImports: false,
  ignoreNoDocuments: true,
};

export default config;
