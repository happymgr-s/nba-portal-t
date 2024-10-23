import { axiosBase } from '@/lib/axiosBase';
import { GetScheduleBasicResponse } from './api/nba/schedule/basic/route';
import { GetActiveTeamProfileListResponse } from './api/nba/teams/active/route';
import { GetStandingsResponse } from './api/nba/standings/route';
import HomeTemplate from '@/components/templates/HomeTemplate/HomeTemplate';

// 動的レンダリングを強制
export const dynamic = 'force-dynamic';

/**
 * ホーム画面
 */
export default async function Home() {
  const today = new Date();
  const searchDate =
    today.getFullYear() +
    '-' +
    (today.getMonth() + 1).toString().padStart(2, '0') +
    '-' +
    today.getDate().toString().padStart(2, '0');

  try {
    const response = await Promise.all([
      axiosBase.get<GetScheduleBasicResponse>(
        `/api/nba/schedule/basic?season=2025&date=${searchDate}&month_display=false`
      ),
      axiosBase.get<GetActiveTeamProfileListResponse>('/api/nba/teams/active'),
      axiosBase.get<GetStandingsResponse>('/api/nba/standings?season=2025'),
    ]);

    const schedules = response[0].data;
    const teams = response[1].data;
    const standings = response[2].data;

    return (
      <>
        <HomeTemplate schedules={schedules} teams={teams} standings={standings} />
      </>
    );
  } catch (error) {
    <>データの取得に失敗しました。</>;
  }
}
