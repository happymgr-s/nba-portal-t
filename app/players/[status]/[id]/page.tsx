import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetPlayerProfileById } from '@/app/api/nba/players/active/[id]/route';
import { GetActivePlayersProfile } from '@/app/api/nba/players/active/route';

// 静的パラメータを生成
export async function generateStaticParams() {
  // 選手のリストを取得する
  const players = await axiosBase
    .get<GetActivePlayersProfile>('/api/nba/players/active')
    .then((res) => res.data);

  // 各選手の ID に基づいて静的パラメータを返す
  return players.map((player) => {
    return { id: player.PlayerID };
  });
}

/**
 * 選手詳細ページ
 */
const PlayerByIdPage = async ({ params }: { params: { status: string; id: string } }) => {
  const { status, id } = params;
  const profile = (await axiosBase.get<GetPlayerProfileById>(`/api/nba/players/${status}/${id}`))
    .data;
  return (
    <>
      <div>
        {profile.FirstName} {profile.LastName} #{profile.Jersey}
      </div>
    </>
  );
};

export default PlayerByIdPage;
