import React from "react";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { Player } from "@/types/player";

type PlayersCardProps = LinkProps & {
  playerData: Player;
};

/**
 * コンポーネント
 * @param props
 */
const PlayersCard: React.FC<PlayersCardProps> = (props) => {
  const { playerData, ...linkProps } = props;

  return (
    <>
      <Link {...linkProps}>
        <div className='max-w-80 p-4 flex flex-col justify-start items-start gap-2 duration-75 cursor-pointer hover:scale-125 '>
          {/* 画像 */}
          <div className='w-12 h-12 flex justify-center items-center'>
            <Image src={"/猫.png"} alt={`${playerData.LastName}_image`} width={60} height={60} />
          </div>

          <div>
            {/* 選手名 */}
            <div className='font-bold'>
              {playerData.FirstName} {playerData.LastName} #{playerData.Jersey}
            </div>
            {/* 所属チーム */}
            <div className=''>team: {playerData.Team}</div>
            <div className=''>position: {playerData.Position}</div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default PlayersCard;
