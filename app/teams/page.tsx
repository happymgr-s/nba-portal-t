import React from "react";

import { axiosBase } from "@/lib/axiosBase";
import { GetActiveTeamProfileListResponse } from "../api/nba/teams/active/route";
import TeamsTemplate from "@/components/templates/TeamsTemplate/TeamsTemplate";

/**
 * チーム一覧ページ
 */
const TeamsPage = async () => {
  const res = await axiosBase.get<GetActiveTeamProfileListResponse>("/api/nba/teams/active");

  if (res.data.length === 0) {
    return <>データがありません。</>;
  }

  return (
    <>
      <TeamsTemplate teams={res.data} />
    </>
  );
};

export default TeamsPage;
