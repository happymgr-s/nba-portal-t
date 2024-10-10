import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetActivePlayersProfile } from '@/app/api/nba/players/active/route';
import PlayersTemplate from '@/components/templates/PlayersTemplate/PlayersTemplate';
import { GetTeamDataListResponse } from '@/app/api/nba/teams/route';

type PlayersProps = {
  searchParams: {
    team?: string;
    position?: string;
  };
};

const PlayersPage = async ({ searchParams }: PlayersProps) => {
  const { team, position } = searchParams;

  try {
    const GET_PLAYERS_URL = `/api/nba/players/active?team=${team ?? ''}&position=${position ?? ''}`;
    const GET_TEAMS_URL = 'api/nba/teams';

    const response = await Promise.all([
      axiosBase.get<GetActivePlayersProfile>(GET_PLAYERS_URL),
      axiosBase.get<GetTeamDataListResponse>(GET_TEAMS_URL),
    ]);

    const players = response[0].data;
    const teams = response[1].data;

    return (
      <>
        <PlayersTemplate players={players} teams={teams} />
      </>
    );
  } catch (error) {
    console.log(error);
    return <>データの取得に失敗しました。</>;
  }
};

export default PlayersPage;
