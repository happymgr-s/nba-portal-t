'use client';
import React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { Player } from '@/types/player';
import { usePathname } from 'next/navigation';

type PlayersCardProps = LinkProps & {
  playerData: Player;
  teamColor?: string | null;
};

/**
 * コンポーネント
 * @param props
 */
const PlayersCard: React.FC<PlayersCardProps> = (props) => {
  const { playerData, teamColor = '000000', ...linkProps } = props;

  const pathName = usePathname();

  return (
    <>
      <Link {...linkProps}>
        <div className="w-28 h-32 md:w-40 rounded-2xl shadow-sm duration-200 overflow-hidden cursor-pointer hover:shadow-lg">
          {/* 選手画像 */}
          <div
            className="w-full h-2/3 relative -z-10"
            style={{
              background: `linear-gradient(140deg, #cccccc 45%, #${teamColor} 45%)`,
            }}
          >
            <Image
              className="absolute top-2 left-2 w-4 h-4 bg-gray-600 rounded-full"
              src={'/猫.png'}
              alt="logo"
              width={20}
              height={20}
            />
            <Image
              className="absolute  bottom-0 left-1 md:left-7"
              src={'/curry_headshot_sample.png'}
              alt="logo"
              width={100}
              height={100}
            />
          </div>

          {/* プレイヤー情報 */}
          <div className="text-xs flex flex-col justify-between p-1 h-full bg-white">
            <div className="flex flex-col items-center">
              <h2 className="font-semibold text-nowrap ">
                {playerData.FirstName} {playerData.LastName}
              </h2>
              {pathName.includes('active') ? (
                <p>
                  {playerData.Team} / {playerData.Position} #{playerData.Jersey}
                </p>
              ) : (
                <p>{playerData.Position}</p>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlayersCard;
