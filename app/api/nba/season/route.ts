import axios from 'axios';
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
    const result = await axios.get<GetCurrentSeasonResponse>(url);
    return NextResponse.json(result.data);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
