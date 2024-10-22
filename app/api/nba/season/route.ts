import { NextRequest, NextResponse } from 'next/server';
import { Season } from '@/types/season';

export type GetCurrentSeasonResponse = Season;

/**
 * 現在のシーズン情報を取得する
 * @returns シーズン情報
 */
export async function GET(req: NextRequest) {
  const url = `https://api.sportsdata.io/v3/nba/scores/json/CurrentSeason?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get<GetCurrentSeasonResponse>(url);
    const result = await fetch(url, { next: { revalidate: 86400 } }); // ※２４時間キャッシュ
    const json = await result.json();
    return NextResponse.json(json);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}

export const seasonMockData: Season = {
  Season: 2025,
  StartYear: 2024,
  EndYear: 2025,
  Description: '2024-25',
  RegularSeasonStartDate: '2024-10-22T00:00:00',
  PostSeasonStartDate: '2025-04-14T00:00:00',
  SeasonType: 'REG',
  ApiSeason: '2025REG',
};
