This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## ブランチ戦略 & 開発フロー

### ブランチ構成

| ブランチ | 用途 |
|---------|------|
| `main` | 本番環境用（リリースブランチ） |
| `develop` | 開発用ブランチ |

### 開発フロー

```
1. developブランチで開発
2. developへPRを作成 → ビルドチェック自動実行
3. レビュー・マージ
4. リリース準備ができたらタグをプッシュ → PRが自動作成
5. PRをマージ → Vercelへ自動デプロイ
```

---

## CI/CD（GitHub Actions）

### 1. ビルドチェック（`checkBuild.yml`）

**トリガー**: `develop`ブランチへのPR作成時

- ビルドが通るかチェック
- PRマージ前の品質担保

### 2. リリースPR自動作成（`release-pr.yml`）

**トリガー**: `v*`パターンのタグがプッシュされた時（例：`v1.0.0`, `v2.1.0`）

- `develop` → `main` へのPRを自動作成
- リリースノート用のテンプレート付き

#### リリース手順

```bash
# 1. developブランチで最新を取得
git checkout develop
git pull origin develop

# 2. リリースタグを作成してプッシュ
git tag v2.1.0
git push origin v2.1.0

# 3. GitHubでPRが自動作成されるので確認
# 4. PRをマージ → 自動デプロイ
```

### 3. Vercelデプロイ（`nextjs.yml`）

**トリガー**: `main`ブランチへのpush時

- Vercelへ自動デプロイ
- 必要なSecrets:
  - `VERCEL_ORG_ID`
  - `VERCEL_TOKEN`
  - `VERCEL_PROJECT_ID`

---

## Deploy on Vercel

本プロジェクトはVercelにホスティングされています。`main`ブランチへのマージで自動デプロイされます。

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
