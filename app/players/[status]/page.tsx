import { axiosBase } from "@/lib/axiosBase";
import React from "react";
import PlayersCard from "@/components/organisms/PlayersCard/PlayersCard";
import { GetActivePlayersProfile } from "@/app/api/nba/players/active/route";
import { ParsedUrlQuery } from "querystring";
import SearchBar from "@/components/molecules/SearchBar/SearchBar";
import PlayersTemplate from "@/components/templates/PlayersTemplate/PlayersTemplate";

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

  const players = (
    await axiosBase.get<GetActivePlayersProfile>(
      `/api/nba/players/${status}?team=${team}&position=${position}`
    )
  ).data;

  return (
    <>
      <PlayersTemplate players={players} />
    </>
  );
};

export default PlayersPage;
