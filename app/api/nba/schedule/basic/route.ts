// import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Schedule } from '@/types/schedule';
import { scheduleBasicMockData } from '@/lib/mockData/scheduleMockData';

export type GetScheduleBasicResponse = Schedule[];

/**
 * スケジュールのみ取得する
 * @returns スケジュール
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const currentYear = new Date().getFullYear();

  // const url = `https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/${season}?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get<GetScheduleBasicResponse>(url);
    return NextResponse.json(scheduleBasicMockData);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
