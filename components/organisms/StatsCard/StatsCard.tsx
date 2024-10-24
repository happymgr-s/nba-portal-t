import { Stat } from '@/types/stat';
import { Team } from '@/types/team';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type StatsCardProps = {
  stat: Stat;
  team?: Team;
  rank: number;
  leaderLabel: string;
};

/**
 * コンポーネント
 * @param props
 */
const StatsCard: React.FC<StatsCardProps> = (props) => {
  const { stat, team, rank, leaderLabel } = props;

  const pointsPerGame = (stat.Points || 0) / (stat.Games || 0);

  const checkedRank = checkRank(rank);

  return (
    <>
      <div className="p-2 bg-white shadow-sm relative w-full mb-2">
        <div
          className="absolute top-0 left-0 w-6 h-6 text-center"
          style={{
            background: `linear-gradient(135deg, ${checkedRank.color}  45% ,#ffffff 45%)`,
          }}
        >
          <span className="font-actionNBAMedium text-2xl">{checkedRank.label}</span>
        </div>

        <Image
          className={`absolute bottom-0 ${rank === 0 ? 'left-12' : 'left-0'}`}
          src={`/sample_headshot.png`}
          alt="headshot"
          width={rank === 0 ? 100 : 70}
          height={rank === 0 ? 100 : 70}
        />

        <div className={rank === 0 ? 'pl-32' : 'pl-10'}>
          <div className="flex items-end">
            {/* 名前 */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2">
                <Link href={`/teams/${stat.Team}`} className="hover:opacity-75">
                  <Image
                    src={team?.WikipediaLogoUrl || ''}
                    alt={`team_logo`}
                    width={30}
                    height={30}
                  />
                </Link>
                <div className="overflow-hidden">
                  <Link href={`/players/active/${stat.PlayerID}`}>
                    <p className="text-sm md:text-md text-blue-400 hover:opacity-75 text-ellipsis overflow-hidden text-nowrap">
                      {stat.Name}
                    </p>
                  </Link>
                  <p className="text-sm md:text-md">{stat.Position} / #--</p>
                </div>
              </div>
            </div>
          </div>
          {/* 成績・動画 */}
          <div className="flex justify-between items-center pl-10 lg:pl-12">
            <div className="flex justify-center items-center min-h-14">
              <span className="font-actionNBABold text-3xl">
                {pointsPerGame}
                <span className="text-xl"> {leaderLabel}</span>
              </span>
            </div>
            {rank === 0 && (
              <Image src={'/video_mock.png'} alt={'動画（仮）'} width={120} height={60}></Image>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default StatsCard;

function checkRank(rank: number) {
  switch (rank) {
    case 0:
      return { label: '1st', color: '#FFD700' };
    case 1:
      return { label: '2nd', color: '#C0C0C0' };
    case 2:
      return { label: '3rd', color: '#CD7F32' };
    case 3:
      return { label: '4th', color: '' };
    case 4:
      return { label: '5th', color: '' };
    default:
      return { label: '', color: '' };
  }
}
