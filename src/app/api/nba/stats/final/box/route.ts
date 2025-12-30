import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定した試合のチームと選手の統計情報を取得
 * @param
 * @returns
 */
export async function GET(req: NextRequest) {
  //  if (process.env.NODE_ENV !== 'production') {
  //    return;
  //  }
  const searchParams = req.nextUrl.searchParams;
  const gameId = searchParams.get('gameId');

  if (!gameId || gameId === 'undefined') {
    return NextResponse.json({ status: 400, message: 'required search params [gameId]' });
  }

  const URL = `https://api.sportsdata.io/v3/nba/stats/json/BoxScoreFinal/${gameId}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
