import RankingTemplate from '@/components/templates/RankingTemplate/RankingTemplate';
import { axiosBase } from '@/lib/axiosBase';

type RankingPageSearchParams = {
  searchParams: {
    season: string;
  };
};

const RankingPage = async ({ searchParams }: RankingPageSearchParams) => {
  const { season } = searchParams;
  try {
    const response = await Promise.all([
      axiosBase.get(`/api/nba/standings?${season}`),
      axiosBase.get('/api/nba/teams/active'),
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
