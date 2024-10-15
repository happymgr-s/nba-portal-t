// import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Game } from '@/types/schedule';
import { scheduleMockData } from '@/lib/mockData/scheduleMockData';

export type GetSchedulesResponse = Game[];

/**
 * こっちはスケジュールに加えてゲーム情報なども取得できる
 * @returns ゲームスケジュール
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const currentYear = new Date().getFullYear();

  // const url = `https://api.sportsdata.io/v3/nba/scores/json/Games/${season}?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get<GetSchedulesResponse>(url);
    return NextResponse.json(scheduleMockData);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
