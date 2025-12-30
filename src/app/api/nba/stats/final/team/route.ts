import { NextRequest, NextResponse } from 'next/server';

/**
 * 全チームのシーズン成績(シーズン合計)を取得
 * @param season 必須 ex) 2024
 * @returns
 */
export async function GET(req: NextRequest) {
  //  if (process.env.NODE_ENV !== 'production') {
  //    return;
  //  }

  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');

  if (!season || season === 'undefined') {
    return NextResponse.json({ status: 400, message: 'required search params [season]' });
  }

  const URL = `https://api.sportsdata.io/v3/nba/scores/json/TeamSeasonStats/${season}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
