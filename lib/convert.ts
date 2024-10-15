import { teamFullNames } from './constants';

/**
 * チームの略称をチーム名（フル）に変換する
 * @return 州名まで含めたチーム名
 */
export function getFullTeamName(name: string) {
  return teamFullNames[name];
}
