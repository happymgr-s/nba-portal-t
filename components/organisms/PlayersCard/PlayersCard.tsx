import React from 'react';
import Image from 'next/image';
import Link, { LinkProps } from 'next/link';

type PlayersCardProps = LinkProps & {
  playerImageSrc: string;
  playerImageAlt: string;
  playerName: string;
  teamName: string;
  position: string;
};

/**
 * コンポーネント
 * @param props
 */
const PlayersCard: React.FC<PlayersCardProps> = (props) => {
  const { playerImageSrc, playerImageAlt, playerName, teamName, position, ...linkProps } = props;

  return (
    <>
      <Link {...linkProps}>
        <div className="max-w-48 p-4 flex flex-col justify-start items-start gap-2 duration-75 cursor-pointer hover:scale-125 ">
          {/* 画像 */}
          <div className="w-12 h-12 flex justify-center items-center">
            <Image src={playerImageSrc} alt={playerImageAlt} width={60} height={60} />
          </div>

          <div>
            {/* 選手名 */}
            <div className="">name: {playerName}</div>
            {/* 所属チーム */}
            <div className="">team: {teamName}</div>
            <div className="">position: {position}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlayersCard;
