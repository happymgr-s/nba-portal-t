import React from 'react';

import { Schedule } from '@/types/schedule';
import { Team } from '@/types/team';

import ScoreText from '@/components/atoms/ScoreText/ScoreText';
import ScheduleTeamCard from '@/components/molecules/ScheduleTeamCard/ScheduleTeamCard';
import { JapaneseDate } from '@/lib/japaneseDate';

type ScheduleCardProps = {
  schedule: Schedule;
  homeTeam?: Team;
  awayTeam?: Team;
};

/**
 * 日程カード
 * @param props
 */
const ScheduleCard: React.FC<ScheduleCardProps> = (props) => {
  const { schedule, homeTeam, awayTeam } = props;

  const scheduleDate = new JapaneseDate(
    schedule.DateTimeUTC === null ? schedule.Day || '' : schedule.DateTimeUTC || '',
    'UTC'
  );

  const displayStatus = (() => {
    if (schedule.IsClosed) return 'CLOSED';
    if (schedule.Status === 'InProgress') return 'LIVE';
    if (schedule.Status === 'Postponed') return '延期';
    if (schedule.Status === 'Canceled') return 'CANCELED';
    return '';
  })();

  const tagColor = (() => {
    if (schedule.IsClosed) return '#EC7E7E';
    if (schedule.Status === 'InProgress') return '#B5EC7E';
    if (schedule.Status === 'Postponed') return '#333333';
    if (schedule.Status === 'Canceled') return '#000000';
    return '';
  })();

  return (
    <>
      <div className="p-2 border bg-white relative z-0">
        {/* タグ */}
        {displayStatus !== '' && (
          <div
            className="absolute top-0 left-0 w-28 h-6 lg:w-40 lg:h-12"
            style={{ backgroundColor: tagColor }}
          >
            <div className="h-full flex justify-center items-center">
              <span className="text-white font-bold text-sm lg:text-xl">{displayStatus}</span>
            </div>
          </div>
        )}

        <div className="w-full h-full">
          <p className="text-center font-bold text-xl">{scheduleDate.toDisplayTimeString()}~</p>

          {/* チーム */}
          <div className="flex justify-center items-center gap-2 lg:gap-6">
            {/* ホームチーム */}
            <div className="flex flex-col items-center">
              <p className="text-center font-bold">HOME</p>
              <ScheduleTeamCard
                schedule={schedule}
                logoSrc={homeTeam?.WikipediaLogoUrl || ''}
                side="HOME"
              />
            </div>

            {/* スコア */}
            <div className="flex justify-center items-center gap-4 md:gap-16">
              <ScoreText>{schedule.HomeTeamScore || 0}</ScoreText>
              <ScoreText>-</ScoreText>
              <ScoreText>{schedule.AwayTeamScore || 0}</ScoreText>
            </div>

            {/* アウェイチーム */}
            <div className="flex flex-col items-center">
              <p className="text-center font-bold">AWAY</p>
              <ScheduleTeamCard
                schedule={schedule}
                logoSrc={awayTeam?.WikipediaLogoUrl || ''}
                side="AWAY"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScheduleCard;
