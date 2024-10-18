'use client';
import React from 'react';
import { Schedule } from '@/types/schedule';
import { Team } from '@/types/team';

import ScheduleCard from '@/components/organisms/ScheduleCard/ScheduleCard';
import SeasonTabs from '@/components/organisms/SeasonTabs/SeasonTabs';
import DisplayTypeSwitch from '@/components/organisms/DisplayTypeSwitch/DisplayTypeSwitch';
import ScheduleDatePicker from '@/components/organisms/ScheduleDatePicker/ScheduleDatePicker';
import { useSearchParams } from 'next/navigation';
import { groupSchedulesByDate } from '@/lib/groupSchedule';

type ScheduleTemplateProps = {
  schedules: Schedule[];
  teams: Team[];
};

/**
 * 日程一覧テンプレート
 * @param schedules 日程一覧
 * @param teams チーム一覧情報
 */
const ScheduleTemplate: React.FC<ScheduleTemplateProps> = (props) => {
  const { schedules, teams } = props;

  const searchParams = useSearchParams();

  const isMonthDisplay = searchParams.get('month_display') === 'true';

  const groupedSchedules = groupSchedulesByDate(schedules);

  return (
    <div className="pb-6">
      <div className=" py-2 px-1 lg:p-4 sticky top-[58px] md:top-0 z-10 flex flex-col items-center gap-2 bg-[#eaeaea] mb-4">
        <ScheduleDatePicker />

        <DisplayTypeSwitch />

        <SeasonTabs />
      </div>

      {schedules.length === 0 ? (
        <>表示できる日程がありません。</>
      ) : !isMonthDisplay ? (
        <>
          <p className="text-sm text-gray-500 text-center mb-2">※時間は日本時間です</p>
          <div className="flex flex-col gap-4">
            {schedules.map((schedule) => {
              const homeTeam = teams.find((team) => team.TeamID === schedule.HomeTeamID);
              const awayTeam = teams.find((team) => team.TeamID === schedule.AwayTeamID);
              return (
                <ScheduleCard
                  key={schedule.GameID}
                  schedule={schedule}
                  homeTeam={homeTeam}
                  awayTeam={awayTeam}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-gray-500 text-center mb-2">※時間は日本時間です</p>
          <div className="flex flex-col gap-4">
            {Object.entries(groupedSchedules).map(([date, games]) => (
              <div key={date} className="">
                <h2 className="text-center text-gray-500 font-semibold text-lg">{date}</h2>
                {games.map((game) => {
                  const homeTeam = teams.find((team) => team.TeamID === game.HomeTeamID);
                  const awayTeam = teams.find((team) => team.TeamID === game.AwayTeamID);
                  return (
                    <ScheduleCard
                      key={game.GameID}
                      schedule={game}
                      homeTeam={homeTeam}
                      awayTeam={awayTeam}
                    />
                  );
                })}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ScheduleTemplate;
