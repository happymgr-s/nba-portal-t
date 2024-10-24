import StatsTemplate from '@/components/templates/StatsTemplate/StatsTemplate';
import { axiosBase } from '@/lib/axiosBase';
import { Season } from '@/types/season';

const StatsPage = async () => {
  try {
    const currentSeason = (await axiosBase.get<Season>('/api/nba/season')).data;
    const response = await Promise.all([
      axiosBase.get(`/api/nba/stats/final/player?season=${currentSeason.Season}`),
      axiosBase.get(`/api/nba/teams`),
    ]);

    const playerStats = response[0].data;
    const teams = response[1].data;

    return (
      <>
        <StatsTemplate playerStats={playerStats} teams={teams} />
      </>
    );
  } catch (error) {
    <>データの取得に失敗しました。</>;
  }
};

export default StatsPage;
