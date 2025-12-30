import { teamFullNames } from './constants';

/**
 * チームの略称をチーム名（フル）に変換する
 * @return 州名まで含めたチーム名
 */
export function getFullTeamName(name: string) {
  return teamFullNames[name];
}

export function toJapaneseISOString(date = new Date()) {
  // 日本時間（JST）はUTC+9
  const timeOffsetInMs = 9 * 60 * 60 * 1000; // 9時間分のミリ秒
  const jstDate = new Date(date.getTime() + timeOffsetInMs);

  const year = jstDate.getFullYear();
  const month = String(jstDate.getMonth() + 1).padStart(2, '0'); // 月は0ベースなので+1
  const day = String(jstDate.getDate()).padStart(2, '0');
  const hours = String(jstDate.getHours()).padStart(2, '0');
  const minutes = String(jstDate.getMinutes()).padStart(2, '0');
  const seconds = String(jstDate.getSeconds()).padStart(2, '0');

  // ISO 8601形式の日本時間（JST）は"YYYY-MM-DDTHH:MM:SS+09:00"
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+09:00`;
}
