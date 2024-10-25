import React from 'react';
import { Stat } from '@/types/stat';
import { Team } from '@/types/team';
import { getTopAverageLeaders } from '@/lib/getLeagueLeader';

import StatsGridTemplate from '../StatsGridTemplate/StatsGridTemplate';

type StatsTemplateProps = {
  playerStats: Stat[];
  teams: Team[];
};

/**
 * スタッツページテンプレート
 * @param props
 */
const StatsTemplate: React.FC<StatsTemplateProps> = (props) => {
  const { playerStats, teams } = props;

  const pointsLeaders = getTopAverageLeaders(playerStats, 'Points');

  const assistsLeaders = getTopAverageLeaders(playerStats, 'Assists');

  const reboundLeaders = getTopAverageLeaders(playerStats, 'Rebounds');

  const blockedLeaders = getTopAverageLeaders(playerStats, 'BlockedShots');

  const stealLeaders = getTopAverageLeaders(playerStats, 'Steals');

  const turnOverLeaders = getTopAverageLeaders(playerStats, 'Turnovers');

  const personalFoulLeaders = getTopAverageLeaders(playerStats, 'PersonalFouls');

  return (
    <>
      <div className="p-1 lg:p-2">
        <p className="text-center font-gothic text-gray-400">
          ※統計情報はスクランブルデータのため、実際の数値より5%~20%ほど上下しています。
        </p>
        <div className="flex flex-col gap-3">
          <StatsGridTemplate
            title="平均得点"
            leaderKey="Points"
            leaders={pointsLeaders}
            leaderLabel="pts"
            teams={teams}
          />
          <StatsGridTemplate
            title="平均アシスト"
            leaderKey="Assists"
            leaders={assistsLeaders}
            leaderLabel="ast"
            teams={teams}
          />
          <StatsGridTemplate
            title="平均リバウンド"
            leaderKey="Rebounds"
            leaders={reboundLeaders}
            leaderLabel="reb"
            teams={teams}
          />
          <StatsGridTemplate
            title="平均ブロック"
            leaderKey="BlockedShots"
            leaders={blockedLeaders}
            leaderLabel="blk"
            teams={teams}
          />
          <StatsGridTemplate
            title="平均スチール数"
            leaderKey="Steals"
            leaders={stealLeaders}
            leaderLabel="stl"
            teams={teams}
          />
          <StatsGridTemplate
            title="平均ターンオーバー数"
            leaderKey="Turnovers"
            leaders={turnOverLeaders}
            leaderLabel="to"
            teams={teams}
          />
          <StatsGridTemplate
            title="平均ファウル数"
            leaderKey="PersonalFouls"
            leaders={personalFoulLeaders}
            leaderLabel="pf"
            teams={teams}
          />
        </div>
      </div>
    </>
  );
};

export default StatsTemplate;
