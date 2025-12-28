# NBA Portal 改善計画

## 概要

このドキュメントは、NBA Portal の大規模リファクタリング計画をまとめたものです。

### 目標

1. **アーキテクチャの刷新** - src フォルダ導入 + アトミックデザインから機能ベースのディレクトリ構成へ
2. **API 移行** - openapi-fetch による型安全な API 呼び出しへ
3. **パフォーマンス最適化** - PPR（Partial Pre-Rendering）対応
4. **テスト基盤の構築** - テスト環境のセットアップ

---

## Phase 1: テスト環境セットアップ

### 目的

リファクタリング前にテスト基盤を整え、変更による破壊を検知できるようにする。

### タスク

- [ ] Vitest のインストールと設定
- [ ] React Testing Library のセットアップ
- [ ] テスト用のユーティリティ（モック、ヘルパー）作成
- [ ] CI でのテスト実行設定（GitHub Actions）
- [ ] 主要コンポーネントの基本テスト作成（オプション）

### インストールするパッケージ

```bash
npm install -D vitest @vitejs/plugin-react jsdom @testing-library/react @testing-library/jest-dom
```

### ファイル構成

```
├── vitest.config.ts
├── vitest.setup.ts
```

### 設定ファイル例

**vitest.config.ts**

```typescript
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

**vitest.setup.ts**

```typescript
import "@testing-library/jest-dom";
```

### 完了条件

- [ ] `npm run test` でテストが実行できる
- [ ] サンプルテストがパスする
- [ ] GitHub Actions でテストが自動実行される

---

## Phase 2: フォルダ構成の刷新

### 目的

1. **src フォルダの導入** - アプリケーションコードと設定ファイル等を明確に分離
2. **アトミックデザインの廃止** - 機能/画面ベース（目的駆動）のディレクトリ構成に移行

### src フォルダ導入の意図

| 場所   | 内容                                         |
| ------ | -------------------------------------------- |
| `src/` | アプリケーションコード（app, lib, types 等） |
| ルート | 設定ファイル、ドキュメント、CI/CD 等         |

```
nba-portal-t/
├── src/                          # アプリケーションコード
│   ├── app/                      # Next.js App Router
│   ├── lib/                      # ユーティリティ、APIクライアント
│   └── types/                    # 型定義
├── docs/                         # ドキュメント
├── public/                       # 静的ファイル
├── .github/                      # GitHub Actions等
├── next.config.mjs               # Next.js設定
├── package.json
├── tsconfig.json
└── ...
```

### 現状の構成

```
nba-portal-t/
├── app/                          # ← srcに移動
├── components/                   # ← 廃止・再編
│   ├── atoms/
│   ├── molecules/
│   ├── organisms/
│   ├── templates/
│   └── ui/
├── lib/                          # ← srcに移動
├── types/                        # ← srcに移動
└── ...
```

### 目標の構成

```
nba-portal-t/
├── src/
│   ├── app/
│   │   ├── (home)/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── _components/
│   │   │       ├── TodaySchedule/
│   │   │       │   ├── TodaySchedule.tsx
│   │   │       │   └── TodayScheduleSkeleton.tsx
│   │   │       ├── StandingsPreview/
│   │   │       └── NewsSlider/
│   │   ├── schedule/
│   │   │   ├── page.tsx
│   │   │   ├── loading.tsx
│   │   │   └── _components/
│   │   │       ├── ScheduleCalendar/
│   │   │       ├── ScheduleCard/
│   │   │       └── ScheduleDatePicker/
│   │   ├── ranking/
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   │       └── StandingsTable/
│   │   ├── stats/
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   │       └── StatsCard/
│   │   ├── teams/
│   │   │   ├── page.tsx
│   │   │   ├── [teamName]/
│   │   │   │   └── page.tsx
│   │   │   └── _components/
│   │   │       └── TeamsCard/
│   │   ├── players/
│   │   │   ├── active/
│   │   │   │   ├── page.tsx
│   │   │   │   └── [id]/
│   │   │   └── _components/
│   │   │       ├── PlayersCard/
│   │   │       └── PlayersSearchBar/
│   │   ├── news/
│   │   │   ├── page.tsx
│   │   │   └── _components/
│   │   │       └── NewsCard/
│   │   ├── _components/                  # 共有コンポーネント
│   │   │   ├── ui/                       # shadcn等の汎用UI
│   │   │   │   ├── button.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   └── ...
│   │   │   ├── layout/                   # レイアウト系
│   │   │   │   ├── Header/
│   │   │   │   ├── Footer/
│   │   │   │   └── SideBar/
│   │   │   └── common/                   # 複数画面で使う共通コンポーネント
│   │   │       ├── ConferenceTitle/
│   │   │       ├── SeasonTabs/
│   │   │       └── TeamLogo/
│   │   ├── layout.tsx
│   │   └── globals.css
│   ├── lib/
│   │   ├── api-client/                   # openapi-fetchクライアント
│   │   ├── utils.ts
│   │   └── ...
│   └── types/
│       └── generated/                    # OpenAPI生成型
├── docs/
├── public/
├── .github/
├── next.config.mjs
├── package.json
└── tsconfig.json
```

### 命名規則

| カテゴリ                   | 規則                           | 例                                           |
| -------------------------- | ------------------------------ | -------------------------------------------- |
| ページ固有コンポーネント   | `src/app/[route]/_components/` | `src/app/schedule/_components/ScheduleCard/` |
| 共有 UI コンポーネント     | `src/app/_components/ui/`      | `src/app/_components/ui/button.tsx`          |
| レイアウトコンポーネント   | `src/app/_components/layout/`  | `src/app/_components/layout/Header/`         |
| 共通ビジネスコンポーネント | `src/app/_components/common/`  | `src/app/_components/common/SeasonTabs/`     |

### 移行手順

#### Step 1: src フォルダの作成と基盤移動

- [ ] `src/` フォルダを作成
- [ ] `app/` → `src/app/` に移動
- [ ] `lib/` → `src/lib/` に移動
- [ ] `types/` → `src/types/` に移動
- [ ] `tsconfig.json` のパス更新（`@/*` → `src/*`）
- [ ] `next.config.mjs` の確認（必要に応じて更新）
- [ ] ビルド確認

#### Step 2: 共有コンポーネントの移動

- [ ] `components/ui/` → `src/app/_components/ui/`
- [ ] Header, Footer, SideBar → `src/app/_components/layout/`
- [ ] 複数ページで使うコンポーネント → `src/app/_components/common/`

#### Step 3: ページ固有コンポーネントの移動

- [ ] ホーム関連 → `src/app/(home)/_components/`
- [ ] スケジュール関連 → `src/app/schedule/_components/`
- [ ] ランキング関連 → `src/app/ranking/_components/`
- [ ] スタッツ関連 → `src/app/stats/_components/`
- [ ] チーム関連 → `src/app/teams/_components/`
- [ ] 選手関連 → `src/app/players/_components/`
- [ ] ニュース関連 → `src/app/news/_components/`

#### Step 4: テンプレートの廃止

- [ ] テンプレートの内容を page.tsx に統合、または \_components に分割

#### Step 5: クリーンアップ

- [ ] 旧 `components/` ディレクトリを削除
- [ ] 不要なファイルの削除
- [ ] 全ページの動作確認

### tsconfig.json の更新

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### 完了条件

- [ ] `src/` フォルダにアプリケーションコードが集約されている
- [ ] 旧 `components/` ディレクトリが削除されている
- [ ] すべてのコンポーネントが新構成に移動している
- [ ] ビルドが通る
- [ ] 全ページが正常に表示される

---

## Phase 3: API 移行

### 目的

既存の axios + Route Handlers 構成から、openapi-fetch による型安全な API 呼び出しに移行する。

### 現状のアーキテクチャ

```
┌─────────────────────┐
│  サーバーコンポーネント │
│  (page.tsx)          │
└─────────┬───────────┘
          │ axiosBase
          ▼
┌─────────────────────┐
│  Next.js Route      │
│  Handlers           │
│  (app/api/nba/...)  │
└─────────┬───────────┘
          │ axios
          ▼
┌─────────────────────┐
│  sportsdata.io API  │
└─────────────────────┘
```

### 目標のアーキテクチャ

```
┌─────────────────────┐
│  サーバーコンポーネント │
│  (_components/*.tsx) │
└─────────┬───────────┘
          │ openapi-fetch (scoresApi / statsApi)
          ▼
┌─────────────────────┐
│  sportsdata.io API  │
└─────────────────────┘
```

### 削除対象

- [ ] `lib/axiosBase.ts`
- [ ] `app/api/nba/` 配下の Route Handlers（すべて）
- [ ] axios パッケージ（package.json から削除）

### データ取得パターン

**Before (現状)**

```typescript
// app/page.tsx
import { axiosBase } from "@/lib/axiosBase";

export default async function Home() {
  const response = await axiosBase.get("/api/nba/teams/active");
  const teams = response.data;
  return <HomeTemplate teams={teams} />;
}
```

**After (目標)**

```typescript
// app/(home)/_components/TeamsSection/TeamsSection.tsx
import { scoresApi } from "@/lib/api-client";

export async function TeamsSection() {
  const { data: teams, error } = await scoresApi.GET("/{format}/teams", {
    params: { path: { format: "JSON" } },
  });

  if (error || !teams) {
    return <div>データの取得に失敗しました</div>;
  }

  return (
    <div>
      {teams.map((team) => (
        <TeamCard key={team.TeamID} team={team} />
      ))}
    </div>
  );
}
```

### 移行対象エンドポイント

| 現在の Route Handler          | 対応する openapi-fetch 呼び出し                             |
| ----------------------------- | ----------------------------------------------------------- |
| `/api/nba/teams/active`       | `scoresApi.GET('/{format}/teams', ...)`                     |
| `/api/nba/teams`              | `scoresApi.GET('/{format}/AllTeams', ...)`                  |
| `/api/nba/standings`          | `scoresApi.GET('/{format}/Standings/{season}', ...)`        |
| `/api/nba/schedule/basic`     | `scoresApi.GET('/{format}/SchedulesBasic/{season}', ...)`   |
| `/api/nba/schedule`           | `scoresApi.GET('/{format}/Games/{season}', ...)`            |
| `/api/nba/season`             | `scoresApi.GET('/{format}/CurrentSeason', ...)`             |
| `/api/nba/news`               | `scoresApi.GET('/{format}/News', ...)`                      |
| `/api/nba/players/active`     | `scoresApi.GET('/{format}/PlayersActiveBasic', ...)`        |
| `/api/nba/stats/final/player` | `statsApi.GET('/{format}/PlayerSeasonStats/{season}', ...)` |
| `/api/nba/stats/final/team`   | `statsApi.GET('/{format}/TeamSeasonStats/{season}', ...)`   |
| `/api/nba/stats/final/box`    | `statsApi.GET('/{format}/BoxScore/{gameid}', ...)`          |

### 型の扱い

**OpenAPI 生成型を使用:**

```typescript
import type { components } from "@/types/generated/sportsdata-scores";

type Team = components["schemas"]["Team"];
type Standing = components["schemas"]["Standing"];
```

**既存の型ファイル（types/\*.ts）は段階的に廃止:**

- 移行完了後、不要になったら削除

### 開発環境でのモックデータ

開発環境でのモックデータ対応は、以下のいずれかで対応:

1. **MSW (Mock Service Worker)** を使用
2. **環境変数でモック切り替え**
3. **Storybook でのみモック使用**

### 完了条件

- [ ] すべての Route Handlers が削除されている
- [ ] axiosBase.ts が削除されている
- [ ] axios が package.json から削除されている
- [ ] すべての API 呼び出しが openapi-fetch 経由
- [ ] ビルドが通る
- [ ] 全ページが正常にデータを取得・表示できる

---

## Phase 4: PPR 対応（Partial Pre-Rendering）

### 目的

Next.js 15 の PPR（Partial Pre-Rendering）に対応し、ページの一部を静的に、一部を動的にレンダリングすることでパフォーマンスを最適化する。

### 前提条件

- Next.js 15 以上
- Phase 3（API 移行）が完了していること
- 各コンポーネントが独自にデータ取得を行う構成になっていること

### PPR の仕組み

```
┌──────────────────────────────────────┐
│  Page                                │
│  ┌────────────────────────────────┐  │
│  │  Static Shell (即座に表示)      │  │
│  │  - ヘッダー                    │  │
│  │  - ナビゲーション               │  │
│  │  - 静的コンテンツ               │  │
│  └────────────────────────────────┘  │
│  ┌────────────────────────────────┐  │
│  │  Suspense Boundary             │  │
│  │  ┌──────────────────────────┐  │  │
│  │  │  Dynamic Content         │  │  │
│  │  │  (ストリーミング)         │  │  │
│  │  │  - APIデータ             │  │  │
│  │  └──────────────────────────┘  │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```

### 有効化

**next.config.mjs**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
};

export default nextConfig;
```

### 実装パターン

**ホームページの例:**

```typescript
// app/(home)/page.tsx
import { Suspense } from "react";
import { TodaySchedule } from "./_components/TodaySchedule";
import { TodayScheduleSkeleton } from "./_components/TodaySchedule/TodayScheduleSkeleton";
import { StandingsPreview } from "./_components/StandingsPreview";
import { StandingsPreviewSkeleton } from "./_components/StandingsPreview/StandingsPreviewSkeleton";

export default function HomePage() {
  return (
    <div>
      <h1>NBA Portal</h1> {/* 静的 - 即座に表示 */}
      <section>
        <h2>本日の日程</h2> {/* 静的 */}
        <Suspense fallback={<TodayScheduleSkeleton />}>
          <TodaySchedule /> {/* 動的 - ストリーミング */}
        </Suspense>
      </section>
      <section>
        <h2>順位表</h2> {/* 静的 */}
        <Suspense fallback={<StandingsPreviewSkeleton />}>
          <StandingsPreview /> {/* 動的 - ストリーミング */}
        </Suspense>
      </section>
    </div>
  );
}
```

**データ取得コンポーネント:**

```typescript
// app/(home)/_components/TodaySchedule/TodaySchedule.tsx
import { scoresApi } from "@/lib/api-client";

export async function TodaySchedule() {
  const today = new Date().toISOString().split("T")[0];

  const { data: schedules } = await scoresApi.GET(
    "/{format}/GamesByDate/{date}",
    {
      params: { path: { format: "JSON", date: today } },
    }
  );

  if (!schedules?.length) {
    return <p>本日の試合はありません</p>;
  }

  return (
    <ul>
      {schedules.map((game) => (
        <li key={game.GameID}>
          {game.AwayTeam} vs {game.HomeTeam}
        </li>
      ))}
    </ul>
  );
}
```

**Skeleton コンポーネント:**

```typescript
// app/(home)/_components/TodaySchedule/TodayScheduleSkeleton.tsx
export function TodayScheduleSkeleton() {
  return (
    <div className="animate-pulse">
      <div className="h-16 bg-gray-200 rounded mb-2" />
      <div className="h-16 bg-gray-200 rounded mb-2" />
      <div className="h-16 bg-gray-200 rounded" />
    </div>
  );
}
```

### 各ページの Suspense 境界設計

| ページ       | 静的部分             | 動的部分（Suspense 境界）                   |
| ------------ | -------------------- | ------------------------------------------- |
| ホーム       | タイトル、レイアウト | TodaySchedule, StandingsPreview, NewsSlider |
| スケジュール | タイトル、フィルター | ScheduleList                                |
| ランキング   | タイトル、タブ       | StandingsTable                              |
| スタッツ     | タイトル、フィルター | StatsGrid                                   |
| チーム一覧   | タイトル             | TeamsList                                   |
| チーム詳細   | -                    | TeamDetail, TeamStats                       |
| 選手一覧     | タイトル、フィルター | PlayersList                                 |
| 選手詳細     | -                    | PlayerDetail, PlayerStats                   |

### loading.tsx の活用

ページ全体のローディングは`loading.tsx`で対応:

```typescript
// app/schedule/loading.tsx
export default function ScheduleLoading() {
  return (
    <div>
      <h1>スケジュール</h1>
      <ScheduleListSkeleton />
    </div>
  );
}
```

### 完了条件

- [ ] PPR が next.config.mjs で有効化されている
- [ ] 各ページに Suspense 境界が設定されている
- [ ] 各動的コンポーネントに Skeleton が用意されている
- [ ] 静的シェルが即座に表示され、動的部分がストリーミングされる
- [ ] Lighthouse スコアが改善している

---

## タイムライン（目安）

| Phase                 | 期間目安 | 備考               |
| --------------------- | -------- | ------------------ |
| Phase 1: テスト環境   | 1-2 日   | 並行作業可能       |
| Phase 2: フォルダ構成 | 3-5 日   | 大きな変更、慎重に |
| Phase 3: API 移行     | 3-5 日   | Phase 2 と並行可能 |
| Phase 4: PPR 対応     | 2-3 日   | Phase 3 完了後     |

**合計: 約 2-3 週間**

---

## チェックリスト

### Phase 1: テスト環境

- [ ] Vitest インストール
- [ ] 設定ファイル作成
- [ ] サンプルテスト作成
- [ ] CI 設定

### Phase 2: フォルダ構成

- [ ] src フォルダ作成
- [ ] app, lib, types を src 配下に移動
- [ ] tsconfig.json のパス更新
- [ ] 共有コンポーネント移動
- [ ] 各ページのコンポーネント移動
- [ ] テンプレート廃止
- [ ] 旧ディレクトリ削除

### Phase 3: API 移行

- [ ] データ取得をコンポーネント内に移動
- [ ] Route Handlers 削除
- [ ] axios 削除
- [ ] 型の整理

### Phase 4: PPR 対応

- [ ] PPR 有効化
- [ ] Suspense 境界追加
- [ ] Skeleton 作成
- [ ] loading.tsx 追加
- [ ] パフォーマンス計測

---

## 参考リンク

- [Next.js App Router](https://nextjs.org/docs/app)
- [Partial Pre-Rendering](https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering)
- [openapi-fetch Documentation](https://openapi-ts.dev/openapi-fetch/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
