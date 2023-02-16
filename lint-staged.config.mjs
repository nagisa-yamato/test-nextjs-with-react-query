const config = {
  // NOTE:
  // `next lint` は graphql に効かないので使用しない
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}": ["pnpm lint:js", "pnpm format:fix"],
  "*.{css,js,cjs,mjs,jsx,ts,cts,mts,tsx}": [
    "pnpm lint:style",
    "pnpm format:fix",
  ],
  "!**/*.{css,js,cjs,mjs,jsx,ts,cts,mts,tsx}": "pnpm format:fix",
};

export default config;
