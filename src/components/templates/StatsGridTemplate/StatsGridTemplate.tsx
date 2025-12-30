import React from 'react';
import { Stat } from '@/types/stat';
import { Team } from '@/types/team';
import StatsCard from '@/components/organisms/StatsCard/StatsCard';
import { getLeader } from '@/lib/getLeagueLeader';

type StatsGridTemplateProps = {
  title: string;
  leaderKey: keyof Stat;
  leaders: Stat[];
  leaderLabel: string;
  teams: Team[];
};

/**
 * コンポーネント
 * @param props
 */
const StatsGridTemplate: React.FC<StatsGridTemplateProps> = (props) => {
  const { title, leaderKey, leaders, leaderLabel, teams } = props;

  return (
    <>
      <div>
        <h2 className="font-semibold">{title}</h2>
        <div className="grid gap-2 grid-cols-2 lg:grid-rows-2 lg:grid-cols-4">
          {leaders.map((stat, index) => {
            const team = teams.find((team) => team.TeamID === stat.TeamID);
            const leader = getLeader(stat, leaderKey);
            return (
              <div
                key={stat.StatID}
                className={
                  index === 0
                    ? 'col-span-full lg:row-span-full lg:col-span-1'
                    : index === 1 || index === 2
                    ? 'lg:row-span-full lg:col-span-1'
                    : ''
                }
              >
                <StatsCard
                  stat={stat}
                  team={team}
                  rank={index}
                  leader={leader}
                  leaderLabel={leaderLabel}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StatsGridTemplate;
