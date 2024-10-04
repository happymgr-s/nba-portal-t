import { axiosBase } from '@/lib/axiosBase';
import React from 'react';
import { GetActivePlayersProfile } from '../api/nba/players/active/route';
import PlayersCard from '@/components/organisms/PlayersCard/PlayersCard';

const PlayersPage = async () => {
  const players = await (
    await axiosBase.get<GetActivePlayersProfile>('/api/nba/players/active')
  ).data;
  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {players.map((player) => (
          <PlayersCard
            href={`/players/${player.PlayerID}`}
            playerImageSrc="/猫.png"
            playerImageAlt={`${player.LastName}_image`}
            playerName={`${player.FirstName} ${player.LastName}`}
            teamName={player.Team}
            position={player.Position}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersPage;
