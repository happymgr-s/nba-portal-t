import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Team } from '@/types/team';

import RoundedButton from '@/components/atoms/RoundedButton/RoundedButton';

type TeamsCardProps = {
  team: Team;
};

/**
 * チームカードコンポーネント
 * @param props
 */
const TeamsCard: React.FC<TeamsCardProps> = (props) => {
  const { team } = props;

  const teamColor = `#${team.PrimaryColor}`;

  return (
    <>
      <div className="w-48 lg:w-60 flex flex-col gap-2 bg-white shadow-md rounded-lg p-4">
        <div className="w-full h-20 flex justify-center items-center">
          <Image
            src={team.WikipediaLogoUrl || ''}
            alt={`${team.Key}_logo`}
            width={60}
            height={60}
            className=" object-contain"
          />
        </div>

        <div className={`flex flex-col gap-1 items-center text-[#405FCE]`}>
          <Link
            href={`/teams/${team.Key}`}
            className="text-center text-xl leading-none font-actionNBAMedium"
          >
            {team.City} {team.Name}
          </Link>
          <Link href={`/teams/${team.Key}`} className="text-sm leading-none">
            チーム名
          </Link>
        </div>

        <div className="flex justify-center items-center gap-2">
          {/* あとでリンクを追加　※詳細ページのタブリンク */}
          <RoundedButton style={{ borderColor: teamColor }}>日程</RoundedButton>
          <RoundedButton style={{ borderColor: teamColor }}>ロスター</RoundedButton>
        </div>
      </div>
    </>
  );
};

export default TeamsCard;
