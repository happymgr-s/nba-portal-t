import StatsCard from '@/components/organisms/StatsCard/StatsCard';
import { Stat } from '@/types/stat';
import { Team } from '@/types/team';
import React from 'react';

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

  // 得点リーダーの抽出（得点でソートし、上位5名を取得）
  const pointsLeaders = getTopLeaders(playerStats, 'Points', 5);

  // アシストリーダーの抽出（アシストでソートし、上位5名を取得）
  const assistsLeaders = getTopLeaders(playerStats, 'Assists', 5);

  return (
    <>
      <div className="p-1 lg:p-2">
        <p>得点ランキング</p>
        {/* 得点ランキング */}
        <div className="grid gap-2 grid-cols-2">
          {pointsLeaders.map((stat, index) => {
            const team = teams.find((team) => team.TeamID === stat.TeamID);
            return (
              <div key={stat.StatID} className={index === 0 ? 'col-span-full' : ''}>
                <StatsCard stat={stat} team={team} rank={index} leaderLabel="pts" />
              </div>
            );
          })}
        </div>

        <p className="mt-4">アシストランキング</p>
        {/* アシストランキング */}
        <div className="grid gap-2 grid-cols-2">
          {assistsLeaders.map((stat, index) => {
            const team = teams.find((team) => team.TeamID === stat.TeamID);
            return (
              <div key={stat.StatID} className={index === 0 ? 'col-span-full' : ''}>
                <StatsCard stat={stat} team={team} rank={index} leaderLabel="ast" />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default StatsTemplate;

/**
 * 任意の統計項目でリーダーを抽出する汎用関数
 * @param stats - プレイヤーの統計データ
 * @param key - 抽出したい統計項目 (例: 'Points', 'Assists')
 * @param topN - 上位何件を抽出するか
 */
function getTopLeaders<T extends keyof Stat>(stats: Stat[], key: T, topN: number): Stat[] {
  return [...stats]
    .filter((stat) => stat[key] !== null) // nullを除外
    .sort((a, b) => (b[key]! as number) - (a[key]! as number)) // 指定した項目で降順にソート
    .slice(0, topN); // 上位N名を抽出
}
