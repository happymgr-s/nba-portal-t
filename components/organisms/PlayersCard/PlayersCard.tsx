'use client';
import React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';
import { Player } from '@/types/player';
import { usePathname } from 'next/navigation';

type PlayersCardProps = LinkProps & {
  playerData: Player;
  teamLogoUrl?: string | null;
  teamColor?: string | null;
};

/**
 * コンポーネント
 * @param props
 */
const PlayersCard: React.FC<PlayersCardProps> = (props) => {
  const { playerData, teamLogoUrl, teamColor = '000000', ...linkProps } = props;

  const pathName = usePathname();

  return (
    <>
      <Link {...linkProps} className="w-full">
        <div className="w-full h-32 md:w-full  rounded-2xl shadow-sm duration-200 overflow-hidden cursor-pointer hover:shadow-lg">
          {/* 選手画像 */}
          <div
            className="w-full h-2/3 relative -z-10"
            style={{
              background: `linear-gradient(140deg, #cccccc 45%, #${teamColor} 45%)`,
            }}
          >
            <Image
              className="absolute top-2 left-2 "
              src={teamLogoUrl || ''}
              alt="logo"
              width={30}
              height={30}
            />
            <div className="h-full flex justify-center items-end">
              <Image
                src={
                  playerData.PlayerID === 20000485
                    ? '/curry_headshot_sample.png'
                    : '/sample_headshot.png'
                }
                alt="logo"
                width={playerData.PlayerID === 20000485 ? 100 : 70}
                height={playerData.PlayerID === 20000485 ? 100 : 70}
              />
            </div>
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
