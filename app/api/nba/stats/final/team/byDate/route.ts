import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定した日付の全チームの統計情報
 * @param date 必須
 * @returns
 */
export async function GET(req: NextRequest) {
  //  if (process.env.NODE_ENV !== 'production') {
  //    return;
  //  }
  const searchParams = req.nextUrl.searchParams;
  const date = searchParams.get('date');

  if (!date || date === 'undefined') {
    return NextResponse.json({ status: 400, message: 'required search params [date]' });
  }

  const URL = `https://api.sportsdata.io/v3/nba/stats/json/TeamGameStatsByDateFinal/${date}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
