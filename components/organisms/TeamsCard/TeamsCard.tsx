import { Team } from "@/types/team";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import React from "react";

type TeamsCardProps = LinkProps & {
  team: Team;
};

/**
 * チームカードコンポーネント
 * @param props
 */
const TeamsCard: React.FC<TeamsCardProps> = (props) => {
  const { team, ...linkProps } = props;

  return (
    <>
      <Link {...linkProps}>
        <div className=' max-w-52 flex flex-col gap-2 rounded-lg border p-3 cursor-pointer hover:scale-125 duration-75'>
          <div className='flex w-9 h-9 justify-center items-center'>
            <Image
              src={team.WikipediaLogoUrl || ""}
              alt={`${team.Key}_logo`}
              width={40}
              height={40}
            />
          </div>
          <p>
            {team.City} {team.Name}
          </p>
        </div>
      </Link>
    </>
  );
};

export default TeamsCard;
