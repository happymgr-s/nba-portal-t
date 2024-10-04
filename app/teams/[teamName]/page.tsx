import React from 'react';
import Image from 'next/image';
import { axiosBase } from '@/lib/axiosBase';

import { GetPlayersProfileByTeamName } from '@/app/api/nba/players/[teamName]/route';
import { GetTeamProfileByTeamName } from '@/app/api/nba/teams/[teamName]/route';

/**
 * チーム詳細ページ
 */
const TeamByIdPage = async ({ params }: { params: { teamName: string } }) => {
  const { teamName } = params;
  const getTeamsProfileUrl = `/api/nba/teams/${teamName}`;
  const getPlayersUrl = `/api/nba/players/${teamName}`;

  const teamProfile = (await axiosBase.get<GetTeamProfileByTeamName>(getTeamsProfileUrl)).data;
  const players = (await axiosBase.get<GetPlayersProfileByTeamName>(getPlayersUrl)).data;

  return (
    <>
      <div className=" border-b-2 p-2 flex flex-col justify-center items-center gap-2">
        <div className=" flex justify-center items-center">
          <Image
            src={teamProfile?.WikipediaLogoUrl || ''}
            alt={`${teamProfile?.Key}_logo`}
            width={60}
            height={60}
          />
        </div>

        <div>
          {teamProfile?.City} {teamProfile?.Name}
        </div>

        <div className="flex gap-1">
          {teamProfile?.PrimaryColor && (
            <div
              className=" rounded-md w-5 h-5 border border-black"
              style={{ backgroundColor: `#${teamProfile?.PrimaryColor}` || '' }}
            />
          )}
          {teamProfile?.SecondaryColor && (
            <div
              className=" rounded-md w-5 h-5 border border-black"
              style={{ backgroundColor: `#${teamProfile?.SecondaryColor}` || '' }}
            />
          )}
          {teamProfile?.TertiaryColor && (
            <div
              className=" rounded-md w-5 h-5 border border-black"
              style={{ backgroundColor: `#${teamProfile?.TertiaryColor}` || '' }}
            />
          )}
          {teamProfile?.QuaternaryColor && (
            <div
              className=" rounded-md w-5 h-5 border border-black"
              style={{ backgroundColor: `#${teamProfile?.QuaternaryColor}` || '' }}
            />
          )}
        </div>
      </div>

      <div>City : {teamProfile?.City}</div>
      <div>Name : {teamProfile?.Name}</div>
      <div>Conference : {teamProfile?.Conference}</div>

      <div className=" font-bold">Players</div>
      <ul>
        {players.map((player) => (
          <li className=" list-disc" key={player.PlayerID}>
            {player.FirstName} {player.LastName}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TeamByIdPage;
