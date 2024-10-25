import { Stat } from '@/types/stat';
import { Team } from '@/types/team';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type StatsCardProps = {
  stat: Stat;
  team?: Team;
  rank: number;
  leader: string | number;
  leaderLabel: string;
};

/**
 * コンポーネント
 * @param props
 */
const StatsCard: React.FC<StatsCardProps> = (props) => {
  const { stat, team, rank, leader, leaderLabel } = props;

  const checkedRank = checkRank(rank);

  return (
    <>
      <div className="p-2 bg-white shadow-sm relative w-full h-full">
        {/* 左上の色タグ */}
        <div
          className="absolute top-0 left-0 w-6 h-6 text-center"
          style={{
            background: `linear-gradient(135deg, ${checkedRank.color}  45% ,#ffffff 45%)`,
          }}
        >
          <span className="font-actionNBAMedium text-2xl">{checkedRank.label}</span>
        </div>

        {/* 名前 */}
        <div className="text-center">
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

        <div
          className={`flex justify-center items-end gap-4 sm:gap-12 lg:gap-2 ${
            rank === 3 || rank === 4
              ? ''
              : 'lg:flex-col lg:items-center lg:justify-between lg:h-auto'
          }`}
        >
          {/* ヘッドショット */}
          <Link href={`/players/active/${stat.PlayerID}`} className="hover:opacity-75">
            <Image
              // className={`absolute bottom-0 ${rank === 0 ? 'left-12' : 'left-0'}`}
              className="pt-4"
              src={`/sample_headshot.png`}
              alt="headshot"
              width={rank === 3 || rank === 4 ? 70 : 100}
              height={rank === 3 || rank === 4 ? 70 : 100}
            />
          </Link>

          {/* 成績・動画 */}
          <div className={`flex justify-center items-end gap-4 lg:gap-8`}>
            <div className="flex justify-center items-center min-h-20 h-full">
              <span className="font-actionNBABold text-nowrap text-3xl">
                {leader}
                <span className="text-xl"> {leaderLabel}</span>
              </span>
            </div>

            <div className={`${checkedRank.image}`}>
              <p className="text-center text-sm">ハイライト</p>
              <Image src={'/video_mock.png'} alt={'動画（仮）'} width={120} height={60} />
            </div>
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
      return { label: '1st', color: '#FFD700', image: 'block' };
    case 1:
      return { label: '2nd', color: '#C0C0C0', image: 'hidden lg:block' };
    case 2:
      return { label: '3rd', color: '#CD7F32', image: 'hidden lg:block' };
    case 3:
      return { label: '4th', color: '', image: 'hidden' };
    case 4:
      return { label: '5th', color: '', image: 'hidden' };
    default:
      return { label: '', color: '', image: 'hidden' };
  }
}
