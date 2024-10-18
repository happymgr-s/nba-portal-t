import RankingTemplate from '@/components/templates/RankingTemplate/RankingTemplate';
import { axiosBase } from '@/lib/axiosBase';

const RankingPage = async () => {
  const response = await Promise.all([
    axiosBase.get('/api/nba/standings'),
    axiosBase.get('/api/nba/teams/active'),
  ]);

  const standings = response[0].data;
  const teams = response[1].data;
  return (
    <>
      <RankingTemplate standings={standings} teams={teams} />
    </>
  );
};

export default RankingPage;
