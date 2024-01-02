# このプロジェクトについて

Next.jsのapp-routerを用いたテンプレートリポジトリです。

## 開発環境構築方法

```bash
pnpm install
pnpm dev
```

[http://localhost:3000](http://localhost:3000)にアクセスしてください。

## Node と pnpm のバージョンについて

volta で固定しています。

このプロジェクトを使用する場合は [volta](https://volta.sh/) のセットアップを先に行ってください。

セットアップに関しましては、こちらの記事を参考にしてください

https://zenn.dev/xeiculy/articles/03871845342228

## CodeRabbitについて

CodeRabbitによるレビューを受けたい場合は、CadeRabbitのサイトから設定を行う。

特に使用しない場合は、coderabbitの設定ファイルである`coderabbit.yaml`は削除してください。

## 技術構成について

| 技術/ツール       | 説明                                             |
| ----------------- | ------------------------------------------------ |
| Next.js           | Reactベースのフレームワークで、app-routerを採用  |
| Tailwind CSS      | CSSフレームワーク                                |
| TypeScript        | 静的型付けが特徴で、JavaScriptのスーパーセット   |
| husky/lint-staged | コミット時に任意のコマンドを自動実行できるツール |
| shadcn/ui         | UIコンポーネントライブラリ                       |
| pnpm              | Nodeパッケージマネージャ                         |
| volta             | Nodeなどのバージョン管理ツール                   |
| Prettier          | コードフォーマッター                             |
| ESLint            | コード書き方をチェックするツール                 |
| vitest            | テスティングフレームワーク                       |
| coderabbit        | AIレビューツール                                 |

バージョンの詳細や、その他のツールについては`package.json`を参照してください。

## shadcn/uiについて

shadcn/ui は Radix UI をベースとして作られたコンポーネント集です。

```bash
pnpm dlx shadcn-ui@latest add button
```

といった形でコンポーネントを追加してください。

追加できるコンポーネントなど、詳しいことは[shadcn/ui](https://ui.shadcn.com/)の公式ドキュメントを御覧ください。

`components.json`ファイルは、@shadcn/ui CLIツールを使用してプロジェクトにコンポーネントを追加する際の設定が書かれています。

このファイルには、プロジェクトのスタイル、React Server Components (RSC) の有効化、Tailwind CSSの設定、エイリアスの定義などが含まれています。

## ディレクトリ構成のイメージ

```sh
src/
├── app/
│    └── _components/
│          └── ui/
├── lib/
├── styles/
├── types/
└── utils/
```

| ディレクトリ                                       | 説明                                             |
| -------------------------------------------------- | ------------------------------------------------ |
| .husky                                             | huskyの設定ファイルを管理                        |
| .vscode                                            | VSCodeの設定ファイルと推奨拡張機能ファイルを管理 |
| public                                             | 画像ファイルなどを格納                           |
| app                                                | ページに表示するものやコンポーネントを管理       |
| &nbsp;&nbsp;&nbsp;&nbsp;layout.tsx                 | 共通のレイアウトファイル                         |
| &nbsp;&nbsp;&nbsp;&nbsp;page.tsx                   | ルーティング対象ファイル                         |
| &nbsp;&nbsp;&nbsp;&nbsp;\_components               | コンポーネントを管理                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui | ボタンなど小さなUIコンポーネントを管理           |
| lib                                                | ライブラリに依存した関数（初期設定など）を管理   |
| styles                                             | CSSファイルを管理                                |
| types                                              | グローバルに使用可能な型を管理                   |
| utils                                              | 汎用的に使える関数を管理                         |
