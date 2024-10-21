import React from 'react';
import { Schedule } from '@/types/schedule';
import { Standing } from '@/types/standing';
import { Team } from '@/types/team';

import ConferenceTitle from '@/components/atoms/ConferenceTitle/ConferenceTitle';
import NewsListSlider from '@/components/organisms/NewsListSlider/NewsListSlider';
import ScheduleCard from '@/components/organisms/ScheduleCard/ScheduleCard';
import StandingsTable from '@/components/organisms/StandingsTable/StandingsTable';

type HomeTemplateProps = {
  schedules: Schedule[];
  teams: Team[];
  standings: Standing[];
};

/**
 * ホームページテンプレート
 * @param props
 */
const HomeTemplate: React.FC<HomeTemplateProps> = (props) => {
  const { schedules, teams, standings } = props;

  const today = new Date();

  const easternStandings = standings.filter((standing) => standing.Conference === 'Eastern');
  const westernStandings = standings.filter((standing) => standing.Conference === 'Western');

  const sortedEasternStandings = [...easternStandings].sort(
    (a, b) => (a.ConferenceRank || 0) - (b.ConferenceRank || 0)
  );
  const sortedWesternStandings = [...westernStandings].sort(
    (a, b) => (a.ConferenceRank || 0) - (b.ConferenceRank || 0)
  );

  return (
    <>
      <div>
        {/* ニュース一覧（スライダー） */}
        <NewsListSlider />

        <div className="px-1 pb-8">
          {/* 本日の日程 */}
          <div className="mt-4">
            <p className="border-b border-b-gray-400 font-semibold text-lg mb-2">
              本日の日程 {today.toLocaleDateString()}
            </p>
            {schedules.length !== 0 ? (
              schedules.map((schedule) => {
                const homeTeam = teams.find((team) => team.TeamID === schedule.HomeTeamID);
                const awayTeam = teams.find((team) => team.TeamID === schedule.AwayTeamID);

                return (
                  <div className="mb-2" key={schedule.GameID}>
                    <ScheduleCard schedule={schedule} homeTeam={homeTeam} awayTeam={awayTeam} />
                  </div>
                );
              })
            ) : (
              <>表示できる日程はありません。</>
            )}
          </div>

          {/* 順位 */}
          <div className="mt-4">
            <p className="border-b border-b-gray-400 font-semibold text-lg mb-2">順位</p>
            <div className="md:grid md:grid-cols-2 md:gap-2">
              <div className="flex flex-col items-center">
                <ConferenceTitle conference="Eastern" />
                <StandingsTable standings={sortedEasternStandings} teams={teams} />
              </div>
              <div className="flex flex-col items-center">
                <ConferenceTitle conference="Western" />
                <StandingsTable standings={sortedWesternStandings} teams={teams} />
              </div>
            </div>
          </div>

          {/* ハイライト */}
        </div>
      </div>
    </>
  );
};

export default HomeTemplate;
