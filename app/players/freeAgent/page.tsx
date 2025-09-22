import React from "react";
import { axiosBase } from "@/lib/axiosBase";
import PlayersTemplate from "@/components/templates/PlayersTemplate/PlayersTemplate";
import { GetFreeAgentPlayersProfile } from "@/app/api/nba/players/freeAgent/route";

// ビルド時のスタティック生成を無効化
export const dynamic = "force-dynamic";

type PlayersProps = {
  searchParams: {
    team?: string;
    position?: string;
  };
};

const PlayersPage = async ({ searchParams }: PlayersProps) => {
  const { team, position } = searchParams;

  const players = (
    await axiosBase.get<GetFreeAgentPlayersProfile>(
      `/api/nba/players/freeAgent?team=${team}&position=${position}`
    )
  ).data;

  return (
    <>
      <PlayersTemplate players={players} />
    </>
  );
};

export default PlayersPage;
