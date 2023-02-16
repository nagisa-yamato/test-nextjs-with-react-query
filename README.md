# なにこれ

[TanStack Query に載っている Next.js と合わせた使い方](https://tanstack.com/query/latest/docs/react/guides/ssr)

\+

- graphql-codegen
- graphql-eslint
- @lukemorales/query-key-factory
- @typescript-eslint

# 🧨 graphql-eslint VSCode で動いてない

https://github.com/B2o5T/graphql-eslint/issues/1091

## 暫定措置

https://github.com/microsoft/vscode-eslint/issues/1485

vscode-eslint で使用する Node.js の runtime を明示的に指定する

## 手順

1. あらかじめ Node.js の executable がどこにあるか控える

   - 使用中の Node.js version manager によって変わる
   - 例: `/Users/<ユーザー名>/Library/Application Support/fnm/node-versions/v18.14.0/installation/bin/node`

2. VSCode の設定を開く
3. `eslint.runtime` と調べる
4. `Workspace` タブに切り替える

   - User 設定だと影響範囲が未知数

5. `Edit in settings.json` を押す
6. json の value に 1. の path を入れる

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

`pnpm commit` を推奨します (`commitizen` が走ります)

あまりにも雑なコミットメッセージは `commitlint` で弾きます
