import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Schedule } from '@/types/schedule';
import { preScheduleMockData, scheduleBasicMockData } from '@/lib/mockData/scheduleMockData';
import { JapaneseDate } from '@/lib/japaneseDate';

export type GetScheduleBasicResponse = Schedule[];

/**
 * スケジュールのみ取得する
 * @returns スケジュール
 */
export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const date = searchParams.get('date');
  const month = searchParams.get('month');
  const monthDisplay = searchParams.get('month_display') === 'true';
  const closedDisplay = searchParams.get('closed_display') === 'true';
  const team = searchParams.get('team');

  const url = `https://api.sportsdata.io/v3/nba/scores/json/SchedulesBasic/${season}?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get<GetScheduleBasicResponse>(url);
    // return NextResponse.json(result.data);

    const result = (() => {
      if (season === '2025') return scheduleBasicMockData;
      if (season === '2025PRE') return preScheduleMockData;
      return [];
    })();

    const filteredSchedule = result.filter((schedule) => {
      const scheduleDateForJapanese = new JapaneseDate(schedule.DateTimeUTC || '', 'UTC');

      const isClosed = closedDisplay ? true : !schedule.IsClosed;
      const isDate =
        date && !monthDisplay
          ? scheduleDateForJapanese.toDateTimeString().split('T')[0].includes(date)
          : true;

      const isMonth =
        month && monthDisplay
          ? scheduleDateForJapanese.toDateTimeString().split('T')[0].includes(month)
          : true;
      const isTeam =
        team && team !== 'ALL' && monthDisplay
          ? schedule.HomeTeam === team || schedule.AwayTeam === team
          : true;

      return isDate && isMonth && isClosed && isTeam;
    });
    return NextResponse.json(filteredSchedule);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
