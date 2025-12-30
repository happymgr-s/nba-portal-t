import { axiosBase } from '@/lib/axiosBase';
import { GetActiveTeamProfileListResponse } from '../api/nba/teams/active/route';
import { GetStandingsResponse } from '../api/nba/standings/route';
import { RankingTemplate } from './_components/ranking-template';

// ビルド時のスタティック生成を無効化
export const dynamic = 'force-dynamic';

type RankingPageSearchParams = {
  searchParams: {
    season?: string;
  };
};

const RankingPage = async ({ searchParams }: RankingPageSearchParams) => {
  const { season = '2025' } = searchParams;
  try {
    const response = await Promise.all([
      axiosBase.get<GetStandingsResponse>(`/api/nba/standings?season=${season}`),
      axiosBase.get<GetActiveTeamProfileListResponse>('/api/nba/teams/active'),
    ]);

    const standings = response[0].data;
    const teams = response[1].data;
    return (
      <>
        <RankingTemplate standings={standings} teams={teams} />
      </>
    );
  } catch (error) {
    return <>データの取得に失敗しました。</>;
  }
};

export default RankingPage;
