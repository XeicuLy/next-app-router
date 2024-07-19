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
│
├── app/                 # Next.jsのApp Router用ディレクトリ(pagesディレクトリの役割)
│   ├── layout.tsx       # ルートレイアウトファイル
│   ├── page.tsx         # ルートページファイル
│   ├── home/            # ホームページ
│   │   ├── page.tsx     # ホームページのルートファイル
│   │   └── layout.tsx   # ホームページのレイアウトファイル
│   │
│   └── profile/         # プロフィールページ
│       ├── page.tsx     # プロフィールページのルートファイル
│       └── layout.tsx   # プロフィールページのレイアウトファイル
│
├── components/          # 共通コンポーネント (Presentation Layer)
│   ├── ui/              # 純粋なUIコンポーネント (Button, Modal)
│   └── layout/          # レイアウトコンポーネント (Header, Footer)
│
├── features/            # 各ページごとの機能 (Feature Element)
│   ├── home/            # ホームページ固有の機能 (Feature Element)
│   │   ├── components/  # ホームページ固有のコンポーネント (Presentation Layer)
│   │   ├── hooks/       # ホームページのカスタムフック (Business Logic Layer)
│   │   └── api/         # ホームページ関連API呼び出し (Data Access Layer)
│   │
│   └── profile/         # プロフィールページ固有の機能 (Feature Element)
│       ├── components/  # プロフィールページ固有のコンポーネント (Presentation Layer)
│       ├── hooks/       # プロフィールのカスタムフック (Business Logic Layer)
│       └── api/         # プロフィール関連API呼び出し (Data Access Layer)
│
├── hooks/               # グローバルなカスタムフック (Business Logic Layer)
│
├── utils/               # ユーティリティ関数 (Business Logic Layer)
│
├── api/                 # グローバルなAPI通信ロジック (Data Access Layer)
│
├── store/               # 状態管理 (Business Logic Layer)
│
└── styles/              # 共通スタイル (Presentation Layer)
```

| ディレクトリ                                       | 説明                                             |
| -------------------------------------------------- | ------------------------------------------------ |
| .husky                                             | huskyの設定ファイルを管理                        |
| .vscode                                            | VSCodeの設定ファイルと推奨拡張機能ファイルを管理 |
| public                                             | 画像ファイルなどを格納                           |
| app                                                | ページに表示するものやコンポーネントを管理       |
| &nbsp;&nbsp;&nbsp;&nbsp;layout.tsx                 | 共通のレイアウトファイル                         |
| &nbsp;&nbsp;&nbsp;&nbsp;not-found.tsx              | 404ページ用ファイル                              |
| &nbsp;&nbsp;&nbsp;&nbsp;page.tsx                   | ルーティング対象ファイル                         |
| &nbsp;&nbsp;&nbsp;&nbsp;\_components               | コンポーネントを管理                             |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ui | ボタンなど小さなUIコンポーネントを管理           |
| lib                                                | ライブラリに依存した関数（初期設定など）を管理   |
| styles                                             | CSSファイルを管理                                |
| types                                              | グローバルに使用可能な型を管理                   |
| utils                                              | 汎用的に使える関数を管理                         |
