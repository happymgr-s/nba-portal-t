import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetScheduleBasicResponse } from '../api/nba/schedule/basic/route';
import { GetActiveTeamProfileListResponse } from '../api/nba/teams/active/route';
import ScheduleTemplate from '@/components/templates/ScheduleTemplate/ScheduleTemplate';

type ScheduleProps = {
  searchParams: {
    season: string;
  };
};

/**
 * 日程一覧ページ
 * @param season 2025 2025PRE 2025POST 2025STAR etc...
 */
const SchedulePage = async ({ searchParams }: ScheduleProps) => {
  const { season } = searchParams;
  try {
    const response = await Promise.all([
      axiosBase.get<GetScheduleBasicResponse>(`/api/nba/schedule/basic?season=2024`),
      axiosBase.get<GetActiveTeamProfileListResponse>('/api/nba/teams/active'),
    ]);
    //   シーズンの判別が必要
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
