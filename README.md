# なにこれ

[TanStack Query に載っている Next.js と合わせた使い方](https://tanstack.com/query/latest/docs/react/guides/ssr)

\+

- graphql-codegen
- graphql-eslint
- @lukemorales/query-key-factory
- @typescript-eslint

## HELP

🧨 graphql-eslint VSCode で動いてない

https://github.com/B2o5T/graphql-eslint/issues/1091

# Installation and Usage

```zsh
# インストール
pnpm install

# 開発環境実行
pnpm dev

# 型生成
pnpm generate
pnpm generate --watch

# 静的解析
pnpm lint

# 本番用ビルド
pnpm build

# 本番サーバー実行
pnpm start
```

# Contributing

## commit

`git commit` (メッセージ無し) を推奨します

- eslint
- commitizen
- commitlint

が自動的に実行されます

> commitizen うざい気もするので commitizen は husky から剥がしていいかも
