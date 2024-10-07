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

  try {
    const url = `/api/nba/players/active?team=${team ?? ''}&position=${position ?? ''}`;
    console.log(url);
    const players = (await axiosBase.get<GetActivePlayersProfile>(url)).data;

    return (
      <>
        <PlayersTemplate players={players} />
      </>
    );
  } catch (error) {
    console.log(error);
    return <>データの取得に失敗しました。</>;
  }
};

export default PlayersPage;
