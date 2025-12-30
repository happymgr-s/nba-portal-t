import RankingTemplate from "@/components/templates/RankingTemplate/RankingTemplate";
import { axiosBase } from "@/lib/axiosBase";

// ビルド時のスタティック生成を無効化
export const dynamic = "force-dynamic";

type RankingPageSearchParams = {
  searchParams: {
    season: string;
  };
};

const RankingPage = async ({ searchParams }: RankingPageSearchParams) => {
  const { season } = searchParams;
  try {
    const response = await Promise.all([
      axiosBase.get(`/api/nba/standings?season=${season}`),
      axiosBase.get("/api/nba/teams/active"),
    ]);

    const standings = response[0].data;
    const teams = response[1].data;
    return (
      <>
        <RankingTemplate standings={standings} teams={teams} />
      </>
    );
  } catch (error) {
    <>データの取得に失敗しました。</>;
  }
};

export default RankingPage;
