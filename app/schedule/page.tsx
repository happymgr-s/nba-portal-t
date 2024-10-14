import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetScheduleBasicResponse } from '../api/nba/schedule/basic/route';
import { GetActiveTeamProfileListResponse } from '../api/nba/teams/active/route';
import ScheduleTemplate from '@/components/templates/ScheduleTemplate/ScheduleTemplate';

const SchedulePage = async () => {
  const currentSeason = new Date().getFullYear();

  const response = await Promise.all([
    axiosBase.get<GetScheduleBasicResponse>(`/api/nba/schedule/basic?season=${currentSeason}`),
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
};

export default SchedulePage;
