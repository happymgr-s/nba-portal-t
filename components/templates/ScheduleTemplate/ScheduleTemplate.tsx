import React from 'react';
import { Schedule } from '@/types/schedule';
import { Team } from '@/types/team';
import ScheduleCard from '@/components/organisms/ScheduleCard/ScheduleCard';

type ScheduleTemplateProps = {
  schedules: Schedule[];
  teams: Team[];
};

/**
 * コンポーネント
 * @param props
 */
const ScheduleTemplate: React.FC<ScheduleTemplateProps> = (props) => {
  const { schedules, teams } = props;

  return (
    <>
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
    </>
  );
};

export default ScheduleTemplate;
