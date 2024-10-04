import { axiosBase } from "@/lib/axiosBase";
import React from "react";
import PlayersCard from "@/components/organisms/PlayersCard/PlayersCard";
import { GetActivePlayersProfile } from "@/app/api/nba/players/active/route";
import { ParsedUrlQuery } from "querystring";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";

type PlayersProps = {
  params: {
    status: string;
  };
  searchParams: {
    team?: string;
    position?: string;
  };
};

const PlayersPage = async ({ params, searchParams }: PlayersProps) => {
  const { status } = params;
  const { team, position } = searchParams;

  const players = (await axiosBase.get<GetActivePlayersProfile>(`/api/nba/players/${status}`)).data;

  const displayPlayers = players.filter((player) => {
    const isTeam = team ? player.Team === team : true;
    const isPosition = position ? player.Position === position : true;
    return isTeam && isPosition;
  });

  return (
    <div>
      <div className='mb-6'>
        <SearchBar />
      </div>
      <div className='grid grid-cols-5 gap-2'>
        {displayPlayers.map((player) => {
          const status = player.Status === "Active" ? "active" : "freeAgent";

          return (
            <PlayersCard
              key={player.PlayerID}
              href={`/players/${status}/${player.PlayerID}`}
              playerData={player}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PlayersPage;
