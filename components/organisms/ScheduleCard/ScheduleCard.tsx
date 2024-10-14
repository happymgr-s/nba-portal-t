import React from 'react';
import Image from 'next/image';

import { Schedule } from '@/types/schedule';
import { Team } from '@/types/team';

type ScheduleCardProps = {
  schedule: Schedule;
  homeTeam?: Team;
  awayTeam?: Team;
};

/**
 * コンポーネント
 * @param props
 */
const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {
  const { schedule, homeTeam, awayTeam } = props;

  const displayStatus = (() => {
    if (schedule.Status === 'Scheduled') return 'UPCOMING';
    if (schedule.Status === 'InProgress') return 'LIVE';
    if (schedule.Status === 'Final') return 'CLOSED';
  })();

  const tagColor = (() => {
    if (schedule.Status === 'Scheduled') return '#7EB7EC';
    if (schedule.Status === 'InProgress') return '#B5EC7E';
    if (schedule.Status === 'Final') return '#EC7E7E';
  })();

  return (
    <>
      <div className="p-2 border mb-4 bg-white relative">
        {/* タグ */}
        <div
          className="absolute top-0 left-0 w-40 h-12 bg-red-600"
          style={{ backgroundColor: tagColor }}
        >
          <div className="h-full flex justify-center items-center">
            <span className="text-white font-bold text-xl">{displayStatus}</span>
          </div>
        </div>

        <div className="w-full h-full">
          <p className="text-center font-bold text-xl">{schedule.DateTime}</p>

          {/* チーム */}
          <div className="flex justify-center items-center gap-32">
            {/* ホームチーム */}
            <div className="flex flex-col items-center">
              <Image
                src={homeTeam?.WikipediaLogoUrl || ''}
                alt="home_team_logo"
                width={70}
                height={70}
              />
              <p>{schedule.HomeTeam}</p>
              <p>{schedule.HomeTeamScore}</p>
            </div>

            {/* アウェイチーム */}
            <div className="flex flex-col items-center">
              <Image
                src={awayTeam?.WikipediaLogoUrl || ''}
                alt="home_team_logo"
                width={70}
                height={70}
              />
              <p>{schedule.AwayTeam}</p>
              <p>{schedule.AwayTeamScore}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
