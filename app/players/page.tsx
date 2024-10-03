import { axiosBase } from '@/lib/axiosBase';
import React from 'react';

const PlayersPage = async () => {
  const players = await (await axiosBase.get('/api/nba/players/active')).data;
  console.log(players);
  return <div>PlayersPage</div>;
};

export default PlayersPage;
