import React from "react";
import { axiosBase } from "@/lib/axiosBase";
import { GetScheduleBasicResponse } from "../api/nba/schedule/basic/route";
import { GetActiveTeamProfileListResponse } from "../api/nba/teams/active/route";
import { ScheduleTemplate } from "./_components/schedule-template";
import { toJapaneseISOString } from "@/lib/convert";

// ビルド時のスタティック生成を無効化
export const dynamic = "force-dynamic";

type ScheduleProps = {
  searchParams: Promise<{
    season: string;
    date: string;
    month: string;
    team: string;
    month_display: string;
    closed_display: string;
  }>;
};

/**
 * 日程一覧ページ
 * @param season 2025 2025PRE 2025POST 2025STAR etc...
 */
const SchedulePage = async ({ searchParams }: ScheduleProps) => {
  const {
    season,
    date = toJapaneseISOString(new Date()).split("T")[0],
    month,
    team = "ALL",
    month_display = "false",
    closed_display = "true",
  } = await searchParams;

  try {
    const response = await Promise.all([
      axiosBase.get<GetScheduleBasicResponse>(
        `/api/nba/schedule/basic?season=${season}&date=${date}&month=${month}&month_display=${month_display}&team=${team}&closed_display=${closed_display}`,
      ),
      axiosBase.get<GetActiveTeamProfileListResponse>("/api/nba/teams/active"),
    ]);

    const schedules = response[0].data;
    const teams = response[1].data;

    return (
      <>
        <ScheduleTemplate schedules={schedules} teams={teams} />
      </>
    );
  } catch (error) {
    return <>データの取得に失敗しました。</>;
  }
};

export default SchedulePage;
