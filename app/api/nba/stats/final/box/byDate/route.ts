import { NextRequest, NextResponse } from 'next/server';

/**
 * API
 * @param
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

  const URL = `https://api.sportsdata.io/v3/nba/stats/json/BoxScoresFinal/${date}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
