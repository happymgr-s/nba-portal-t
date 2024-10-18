import { Standing } from '@/types/standing';
import { Team } from '@/types/team';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type StandingsTableProps = {
  standings: Standing[];
  teams: Team[];
};

/**
 * ランキングテーブル
 * @param standings ランキング
 * @param teams チーム情報
 */
const StandingsTable: React.FC<StandingsTableProps> = (props) => {
  const { standings, teams } = props;

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="min-w-full">
          <thead>
            <tr className="bg-black">
              <th className="text-white text-xs md:text-sm p-2 min-w-12 sticky left-0 z-10 bg-black">
                順位
              </th>
              <th className="text-white text-xs md:text-sm p-2 min-w-28 sm:min-w-32 md:min-w-40 sticky left-12 z-10 bg-black">
                チーム名
              </th>
              <th className="text-white text-xs md:text-sm p-2 min-w-16 md:min-w-32">勝</th>
              <th className="text-white text-xs md:text-sm p-2 min-w-16 md:min-w-32">敗</th>
              <th className="text-white text-xs md:text-sm p-2 min-w-16 md:min-w-32">勝率</th>
              <th className="text-white text-xs md:text-sm p-2 min-w-16 md:min-w-32">ホーム</th>
              <th className="text-white text-xs md:text-sm p-2 min-w-16 md:min-w-32">アウェイ</th>
              <th className="text-white text-xs md:text-sm text-nowrap p-2 min-w-16 md:min-w-32">
                過去10戦
              </th>
              <th className="text-white text-xs md:text-sm text-nowrap p-2 min-w-16 md:min-w-32">
                連勝/連敗
              </th>
            </tr>
          </thead>

          <tbody className="border-collapse">
            {standings.map((standing) => {
              const teamProfile = teams.find((team) => team.Key === standing.Key);
              return (
                <tr key={standing.TeamID} className="border-2">
                  <td className="px-2 py-1 border-1 text-center sticky left-0 z-10 bg-gray-200">
                    {standing.ConferenceRank.toString().padStart(2, '0')}
                  </td>
                  <td className="sticky left-12 z-10 bg-gray-200">
                    <Link href={`/teams/${teamProfile?.Key}`} className="flex items-center gap-2">
                      <Image
                        src={teamProfile?.WikipediaLogoUrl || ''}
                        alt={`${standing.Key}_logo`}
                        width={20}
                        height={20}
                      />
                      <span className="text-blue-400 hover:opacity-75 duration-20 text-nowrap overflow-hidden text-ellipsis">
                        {standing.Name}
                      </span>
                    </Link>
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.Wins}
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.Losses}
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.Percentage}
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.HomeWins} - {standing.HomeLosses}
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.AwayWins} - {standing.AwayLosses}
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.LastTenWins} - {standing.LastTenLosses}
                  </td>
                  <td className="px-2 py-1 border-1 text-xs md:text-md bg-white text-center">
                    {standing.StreakDescription}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StandingsTable;
