import React from "react";
import { axiosBase } from "@/lib/axiosBase";
import { GetPlayerProfileById } from "@/app/api/nba/players/active/[id]/route";

// ビルド時のスタティック生成を無効化
export const dynamic = "force-dynamic";

/**
 * 選手詳細ページ
 */
const PlayerByIdPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  try {
    const profile = (
      await axiosBase.get<GetPlayerProfileById>(`/api/nba/players/active/${id}`)
    ).data;
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
