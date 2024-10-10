'use client';
import PlayersCard from '@/components/organisms/PlayersCard/PlayersCard';
import PlayersSearchBar from '@/components/organisms/PlayersSearchBar/PlayersSearchBar';
import { Player } from '@/types/player';
import { Team } from '@/types/team';
import React, { useState } from 'react';

type PlayersTemplateProps = {
  players: Player[];
  teams?: Team[];
};

/**
 * コンポーネント
 * @param props
 */
const PlayersTemplate: React.FC<PlayersTemplateProps> = (props) => {
  const { players, teams } = props;

  const [displayLimit, setDisplayLimit] = useState(30);

  return (
    <>
      <div className="mb-6">
        <PlayersSearchBar />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-col-6 gap-2 md:gap-6">
        {players.map((player, count) => {
          const status = player.Status === 'Active' ? 'active' : 'freeAgent';
          const playersTeam = teams?.find((team) => team.TeamID === player.TeamID);

          return (
            displayLimit > count && (
              <div key={player.PlayerID} className="flex justify-center">
                <PlayersCard
                  href={`/players/${status}/${player.PlayerID}`}
                  playerData={player}
                  teamLogoUrl={playersTeam?.WikipediaLogoUrl}
                  teamColor={playersTeam?.PrimaryColor}
                />
              </div>
            )
          );
        })}
      </div>

      {displayLimit < players.length && (
        <div>
          <button
            className="text-blue-500 hover:opacity-80 active:scale-95"
            onClick={() => setDisplayLimit((prev) => prev + 30)}
          >
            もっと表示する
          </button>
        </div>
      )}
    </>
  );
};

export default PlayersTemplate;
