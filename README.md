## ブランチ戦略 & 開発フロー

### ブランチ構成

| ブランチ  | 用途                           |
| --------- | ------------------------------ |
| `main`    | 本番環境用（リリースブランチ） |
| `develop` | 開発用ブランチ                 |

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

**トリガー**: `develop`ブランチへの PR 作成時

- ビルドが通るかチェック
- PR マージ前の品質担保

### 2. リリース PR 自動作成（`release-pr.yml`）

**トリガー**: GitHub でリリースを公開（publish）した時

- `develop` → `main` への PR を自動作成
- リリースノート用のテンプレート付き

#### リリース手順

1. GitHub のリポジトリページで `Releases` → `Draft a new release` を開く
2. タグを作成（例：`v2.1.0`）してリリースノートを書く
3. `Publish release` をクリック
4. → PR が自動作成される
5. PR をマージ → Vercel へ自動デプロイ

### 3. Vercel デプロイ（`nextjs.yml`）

**トリガー**: `main`ブランチへの push 時

- Vercel へ自動デプロイ
- 必要な Secrets:
  - `VERCEL_ORG_ID`
  - `VERCEL_TOKEN`
  - `VERCEL_PROJECT_ID`

---

## Deploy on Vercel

本プロジェクトは Vercel にホスティングされています。`main`ブランチへのマージで自動デプロイされます。

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
