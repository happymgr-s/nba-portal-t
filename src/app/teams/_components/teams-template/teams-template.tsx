import React from "react";

import TeamsTemplateImpl from "@/components/templates/TeamsTemplate/TeamsTemplate";

/**
 * チーム一覧ページテンプレート（route 配下に寄せるためのエントリ）
 *
 * NOTE:
 * 現状の実装は `src/components/templates/TeamsTemplate` をそのまま利用し、
 * import 経路だけ `(home)` と同じ「ページ配下の _components」へ揃える。
 * 実装の移設は段階的に行う。
 */
export const TeamsTemplate: React.FC<React.ComponentProps<typeof TeamsTemplateImpl>> =
  (props) => <TeamsTemplateImpl {...props} />;

