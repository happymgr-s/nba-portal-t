import React from 'react';
import { axiosBase } from '@/lib/axiosBase';
import { GetPlayerProfileById } from '@/app/api/nba/players/active/[id]/route';

/**
 * 選手詳細ページ
 */
const PlayerByIdPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  try {
    const profile = (await axiosBase.get<GetPlayerProfileById>(`/api/nba/players/active/${id}`))
      .data;
    return (
      <>
        <div>
          {profile.FirstName} {profile.LastName} #{profile.Jersey}
        </div>
      </>
    );
  } catch (error) {
    console.error(error);
    return <>データを取得できませんでした。</>;
  }
};

export default PlayerByIdPage;
