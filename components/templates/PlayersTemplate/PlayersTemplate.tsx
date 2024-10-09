'use client';
import PlayersCard from '@/components/organisms/PlayersCard/PlayersCard';
import PlayersSearchBar from '@/components/organisms/PlayersSearchBar/PlayersSearchBar';
import { Player } from '@/types/player';
import React, { useState } from 'react';

type PlayersTemplateProps = {
  players: Player[];
};

/**
 * コンポーネント
 * @param props
 */
const PlayersTemplate: React.FC<PlayersTemplateProps> = (props) => {
  const { players } = props;

  const [displayLimit, setDisplayLimit] = useState(30);

  return (
    <>
      <div className="mb-6">
        <PlayersSearchBar />
      </div>

      <div className="grid grid-cols-5 gap-2">
        {players.map((player, count) => {
          const status = player.Status === 'Active' ? 'active' : 'freeAgent';

          return (
            displayLimit > count && (
              <PlayersCard
                key={player.PlayerID}
                href={`/players/${status}/${player.PlayerID}`}
                playerData={player}
              />
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
