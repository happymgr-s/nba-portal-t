import { axiosBase } from '@/lib/axiosBase';
import React from 'react';
import PlayersCard from '@/components/organisms/PlayersCard/PlayersCard';
import { GetActivePlayersProfile } from '@/app/api/nba/players/active/route';

const PlayersPage = async ({ params }: { params: { status: string } }) => {
  const { status } = params;
  const players = (await axiosBase.get<GetActivePlayersProfile>(`/api/nba/players/${status}`)).data;

  return (
    <div>
      <div className="grid grid-cols-7 gap-2">
        {players.map((player) => {
          const status = player.Status === 'Active' ? 'active' : 'freeAgent';

          return (
            <PlayersCard
              key={player.PlayerID}
              href={`/players/${status}/${player.PlayerID}`}
              playerImageSrc="/猫.png"
              playerImageAlt={`${player.LastName}_image`}
              playerName={`${player.FirstName} ${player.LastName}`}
              teamName={player.Team}
              position={player.Position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlayersPage;
