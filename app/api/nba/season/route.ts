import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Season } from '@/types/season';

export type GetCurrentSeasonResponse = Season;

/**
 * 現在のシーズン情報を取得する
 * @returns シーズン情報
 */
export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.json(seasonMockData);
  }
  const url = `https://api.sportsdata.io/v3/nba/scores/json/CurrentSeason?key=${process.env.NBA_API_KEY}`;

  try {
    const result = await axios.get<GetCurrentSeasonResponse>(url);
    return NextResponse.json(result.data);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}

const seasonMockData = {
  Season: 2025,
  StartYear: 2024,
  EndYear: 2025,
  Description: '2024-25',
  RegularSeasonStartDate: '2024-10-22T00:00:00',
  PostSeasonStartDate: '2025-04-14T00:00:00',
  SeasonType: 'PRE',
  ApiSeason: '2025PRE',
};
