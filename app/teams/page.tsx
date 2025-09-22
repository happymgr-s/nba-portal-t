import React from "react";

import { axiosBase } from "@/lib/axiosBase";
import { GetActiveTeamProfileListResponse } from "../api/nba/teams/active/route";
import TeamsTemplate from "@/components/templates/TeamsTemplate/TeamsTemplate";

// ビルド時のスタティック生成を無効化
export const dynamic = "force-dynamic";

/**
 * チーム一覧ページ
 */
const TeamsPage = async () => {
  try {
    const res = await axiosBase.get<GetActiveTeamProfileListResponse>(
      "/api/nba/teams/active"
    );

    if (res.data.length === 0) {
      return <>データがありません。</>;
    }

    return (
      <>
        <TeamsTemplate teams={res.data} />
      </>
    );
  } catch (error) {
    return <>データの取得に失敗しました。</>;
  }
};

export default TeamsPage;
