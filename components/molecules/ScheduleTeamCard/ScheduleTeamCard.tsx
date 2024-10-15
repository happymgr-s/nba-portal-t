import React from 'react';
import Link from 'next/link';
import { Schedule } from '@/types/schedule';
import CenterLogo from '@/components/atoms/CenterLogo/CenterLogo';

type ScheduleTeamCardProps = {
  schedule: Schedule;
  logoSrc: string;
  side: 'HOME' | 'AWAY';
};

/**
 * 日程表に使うチームコンポーネント
 * @param props
 */
const ScheduleTeamCard: React.FC<ScheduleTeamCardProps> = (props) => {
  const { schedule, logoSrc, side } = props;
  const homeTeamScore = schedule.HomeTeamScore || 0;
  const awayTeamScore = schedule.AwayTeamScore || 0;

  const gameResult = checkGameResult(schedule.IsClosed, homeTeamScore, awayTeamScore);

  return (
    <>
      {side === 'HOME' ? (
        <div className="flex flex-col items-center">
          <Link href={`/teams/${schedule.HomeTeam}`}>
            <CenterLogo src={logoSrc} />
          </Link>

          <Link href={`/teams/${schedule.HomeTeam}`} className="text-blue-600">
            {schedule.HomeTeam}
          </Link>

          <p
            className="font-actionNBABold text-4xl"
            style={{ color: checkResultColor(gameResult.homeResult) }}
          >
            {gameResult.homeResult}
          </p>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <Link href={`/teams/${schedule.AwayTeam}`}>
            <CenterLogo src={logoSrc} />
          </Link>

          <Link href={`/teams/${schedule.AwayTeam}`} className="text-blue-600">
            {schedule.AwayTeam}
          </Link>

          <p
            className="font-actionNBABold text-4xl"
            style={{ color: checkResultColor(gameResult.awayResult) }}
          >
            {gameResult.awayResult}
          </p>
        </div>
      )}
    </>
  );
};

export default ScheduleTeamCard;

function checkGameResult(
  isClosed: boolean,
  homeScore: number,
  awayScore: number
): { homeResult: 'WIN' | 'LOSE' | '-'; awayResult: 'WIN' | 'LOSE' | '-' } {
  if (!isClosed)
    return {
      homeResult: '-',
      awayResult: '-',
    };

  if (homeScore > awayScore)
    return {
      homeResult: 'WIN',
      awayResult: 'LOSE',
    };

  if (homeScore < awayScore)
    return {
      homeResult: 'LOSE',
      awayResult: 'WIN',
    };

  return {
    homeResult: '-',
    awayResult: '-',
  };
}

function checkResultColor(result: 'WIN' | 'LOSE' | '-') {
  if (result === 'WIN') return '#DB544C';
  if (result === 'LOSE') return '#4B64E5';
  return '';
}
