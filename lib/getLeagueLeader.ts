import { Stat } from '@/types/stat';

/**
 * 任意の統計項目でリーダーを抽出する汎用関数
 * @param stats - プレイヤーの統計データ
 * @param key - 抽出したい統計項目 (例: 'Points', 'Assists')
 * @param topN - 上位何件を抽出するか
 */
export function getTopLeaders<T extends keyof Stat>(stats: Stat[], key: T, topN: number): Stat[] {
  return [...stats]
    .filter((stat) => stat[key] !== null && typeof stat[key] === 'number') // nullを除外
    .sort((a, b) => ((b[key] as number) || 0) - ((a[key] as number) || 0)) // 指定した項目で降順にソート
    .slice(0, topN); // 上位N名を抽出
}

/**
 * 試合数で平均を出せる項目でリーダーを抽出する関数
 * @param stats プレイヤーの統計データ
 * @param key 抽出したい統計項目
 */
export function getTopAverageLeaders(
  stats: Stat[],
  key:
    | 'Points'
    | 'FieldGoalsMade'
    | 'ThreePointersMade'
    | 'FreeThrowsMade'
    | 'Rebounds'
    | 'OffensiveRebounds'
    | 'DefensiveRebounds'
    | 'Assists'
    | 'Steals'
    | 'BlockedShots'
    | 'Turnovers'
    | 'PersonalFouls'
    | 'Minutes'
) {
  const filteredStats = [...stats].filter((stat) => stat[key] !== null);
  return filteredStats
    .sort((a, b) => {
      const aLeader = a[key] || 0;
      const aGames = a.Games || 0;
      const bLeader = b[key] || 0;
      const bGames = b.Games || 0;

      const aLeaderPercentage = aLeader / aGames;
      const bLeaderPercentage = bLeader / bGames;

      return bLeaderPercentage - aLeaderPercentage;
    })
    .slice(0, 5);
}

/**
 * キーに応じたスタッツを返す
 * キーによって試合数で割るか、そのまま返すか違うからこの関数作った
 * @param stat
 * @param key 'Points' , 'Assists' etc...
 */
export function getLeader(stat: Stat, key: keyof Stat) {
  switch (key) {
    case 'Points':
    case 'Assists':
    case 'BlockedShots':
    case 'Rebounds':
    case 'Turnovers':
    case 'Steals':
    case 'PersonalFouls':
      return (stat[key] || 0) / (stat.Games || 0);

    default:
      return '';
  }
}
