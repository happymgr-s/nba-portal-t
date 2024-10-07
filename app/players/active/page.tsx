import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetActivePlayersProfile } from '@/app/api/nba/players/active/route';
import PlayersTemplate from '@/components/templates/PlayersTemplate/PlayersTemplate';

type PlayersProps = {
  searchParams: {
    team?: string;
    position?: string;
  };
};

const PlayersPage = async ({ searchParams }: PlayersProps) => {
  const { team, position } = searchParams;

  const players = (
    await axiosBase.get<GetActivePlayersProfile>(
      `/api/nba/players/active?team=${team}&position=${position}`
    )
  ).data;

  return (
    <>
      <PlayersTemplate players={players} />
    </>
  );
};

export default PlayersPage;
