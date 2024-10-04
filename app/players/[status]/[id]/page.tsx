import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetPlayerProfileById } from '@/app/api/nba/players/active/[id]/route';

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
