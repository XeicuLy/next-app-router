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

このプロジェクトでVolta使用する場合で未設定の場合は [volta](https://volta.sh/) のセットアップを先に行ってください。

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

以下はディレクトリ構成の一例です。

```sh
src/
│
├── api/                   # グローバルなAPI通信ロジック (Data Access Layer)
│
├── app/                   # Next.jsのApp Router用ディレクトリ
│   ├── layout.tsx         # ルートレイアウトファイル
│   ├── page.tsx           # ルートページファイル
│   ├── home/              # ホームページ
│   │   ├── page.tsx       # ホームページのルートファイル
│   │   └── layout.tsx     # ホームページのレイアウトファイル
│   │
│   └── profile/           # プロフィールページ
│       ├── page.tsx       # プロフィールページのルートファイル
│       └── layout.tsx     # プロフィールページのレイアウトファイル
│
├── components/            # 共通コンポーネント (Presentation Layer)
│   ├── layout/            # レイアウトコンポーネント (header, footer)
│   │   ├── header/        # ヘッダーコンポーネント
│   │   └── footer/        # フッターコンポーネント
│   └── ui/                # 純粋なUIコンポーネント (button, modal)
│       ├── button/        # ボタンコンポーネント
│       └── modal/         # モーダルコンポーネント
│
├── features/              # 各ページごとの機能 (Feature Element)
│   ├── home/              # ホームページ固有の機能 (Feature Element)
│   │   ├── api/           # ホームページ関連API呼び出し (Data Access Layer)
│   │   ├── components/    # ホームページ固有のコンポーネント (Presentation Layer)
│   │   └── hooks/         # ホームページのカスタムフック (Business Logic Layer)
│   │
│   └── profile/           # プロフィールページ固有の機能 (Feature Element)
│       ├── api/           # プロフィール関連API呼び出し (Data Access Layer)
│       ├── components/    # プロフィールページ固有のコンポーネント (Presentation Layer)
│       └── hooks/         # プロフィールのカスタムフック (Business Logic Layer)
│
├── hooks/                 # グローバルなカスタムフック (Business Logic Layer)
│   ├── useAuth/           # 認証に関するカスタムフック
│   └── useFetch/          # データフェッチに関するカスタムフック
│
├── lib/                   # ライブラリに依存した関数 (Business Logic Layer)
│
├── store/                 # 状態管理 (Business Logic Layer)
│
├── styles/                # 共通スタイル (Presentation Layer)
│   ├── globals.css        # グローバルスタイル
│   ├── variables.css      # CSS変数
│   └── mixins.css         # ミックスイン
│
├── test/                  # テストファイルディレクトリ
│   ├── e2e/               # エンドツーエンドテスト
│   │   ├── home/          # ホームページのE2Eテスト
│   │   │   └── home.e2e.test.ts
│   │   └── profile/       # プロフィールページのE2Eテスト
│   │       └── profile.e2e.test.ts
│   │
│   ├── integration/       # 統合テスト
│   │   ├── home/          # ホームページの統合テスト
│   │   │   └── home.integration.test.ts
│   │   └── profile/       # プロフィールページの統合テスト
│   │       └── profile.integration.test.ts
│   │
│   └── unit/              # ユニットテスト
│       ├── api/           # グローバルなAPI通信ロジックのユニットテスト
│       │   └── api.test.ts
│       ├── app/           # appディレクトリのユニットテスト
│       │   ├── layout.test.ts  # ルートレイアウトファイルのユニットテスト
│       │   ├── page.test.ts    # ルートページファイルのユニットテスト
│       │   ├── home/           # ホームページのユニットテスト
│       │   │   ├── page.test.ts     # ホームページのルートファイルのユニットテスト
│       │   │   └── layout.test.ts   # ホームページのレイアウトファイルのユニットテスト
│       │   └── profile/        # プロフィールページのユニットテスト
│       │       ├── page.test.ts    # プロフィールページのルートファイルのユニットテスト
│       │       └── layout.test.ts  # プロフィールページのレイアウトファイルのユニットテスト
│       ├── features/      # 各ページごとの機能のユニットテスト
│       │   ├── home/      # ホームページのユニットテスト
│       │   │   ├── api/   # ホームページ関連API呼び出しのユニットテスト
│       │   │   │   └── homeApi.test.ts
│       │   │   ├── components/    # ホームページ固有のコンポーネントのユニットテスト
│       │   │   │   └── homeComponent.test.ts
│       │   │   └── hooks/         # ホームページのカスタムフックのユニットテスト
│       │   │       └── homeHook.test.ts
│       │   └── profile/  # プロフィールページのユニットテスト
│       │       ├── api/  # プロフィール関連API呼び出しのユニットテスト
│       │       │   └── profileApi.test.ts
│       │       ├── components/    # プロフィールページ固有のコンポーネントのユニットテスト
│       │       │   └── profileComponent.test.ts
│       │       └── hooks/         # プロフィールのカスタムフックのユニットテスト
│       │           └── profileHook.test.ts
│       ├── components/    # 共通コンポーネントのユニットテスト
│       │   ├── layout/    # レイアウトコンポーネントのユニットテスト
│       │   │   ├── header/    # ヘッダーコンポーネントのユニットテスト
│       │   │   │   └── header.test.ts
│       │   │   └── footer/    # フッターコンポーネントのユニットテスト
│       │   │       └── footer.test.ts
│       │   └── ui/        # 純粋なUIコンポーネントのユニットテスト
│       │       ├── button/    # ボタンコンポーネントのユニットテスト
│       │       │   └── button.test.ts
│       │       └── modal/     # モーダルコンポーネントのユニットテスト
│       │           └── modal.test.ts
│       ├── hooks/         # グローバルなカスタムフックのユニットテスト
│       │   ├── useAuth/   # 認証に関するカスタムフックのユニットテスト
│       │   │   └── useAuth.test.ts
│       │   └── useFetch/  # データフェッチに関するカスタムフックのユニットテスト
│       │       └── useFetch.test.ts
│       ├── lib/           # ライブラリに依存した関数のユニットテスト
│       │   └── lib.test.ts
│       ├── store/         # 状態管理のユニットテスト
│       │   └── store.test.ts
│       └── utils/         # ユーティリティ関数のユニットテスト
│           └── someUtil.test.ts  # 具体的なユーティリティ関数のテストファイル
│
├── types/                 # グローバルな型定義ファイル
│
└── utils/                 # ユーティリティ関数 (Business Logic Layer)
```
