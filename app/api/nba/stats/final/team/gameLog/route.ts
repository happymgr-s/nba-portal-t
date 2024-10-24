import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定したチームの各試合の統計情報を取得（シーズンごと）
 * @param season 必須
 * @param id 必須
 * @param numberOfGames 任意
 * @returns
 */
export async function GET(req: NextRequest) {
  //  if (process.env.NODE_ENV !== 'production') {
  //    return;
  //  }
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const id = searchParams.get('id');
  const numberOfGames = searchParams.get('numberOfGames') || 'all';

  if (!season || !id || season === 'undefined' || id === 'undefined') {
    return NextResponse.json({ status: 400, message: 'required search params [season],[id]' });
  }

  const URL = `https://api.sportsdata.io/v3/nba/scores/json/TeamGameStatsBySeason/${season}/${id}/${numberOfGames}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
