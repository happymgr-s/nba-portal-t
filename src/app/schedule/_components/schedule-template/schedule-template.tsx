import React from "react";

import ScheduleTemplateImpl from "@/components/templates/ScheduleTemplate/ScheduleTemplate";

/**
 * 日程一覧ページテンプレート（route 配下に寄せるためのエントリ）
 *
 * NOTE:
 * 現状の実装は `src/components/templates/ScheduleTemplate` をそのまま利用し、
 * import 経路だけ `(home)` と同じ「ページ配下の _components」へ揃える。
 * 実装の移設は段階的に行う。
 */
export const ScheduleTemplate: React.FC<
  React.ComponentProps<typeof ScheduleTemplateImpl>
> = (props) => <ScheduleTemplateImpl {...props} />;

