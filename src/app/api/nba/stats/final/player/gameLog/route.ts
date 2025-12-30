import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定したシーズンにおける特定の選手の直近n試合のスタッツを取得
 * @param season 必須 2024 2024PRE
 * @param id 必須
 * @param numberOfGames 任意 default='all'
 * @returns 各試合のスタッツ
 */
export async function GET(req: NextRequest) {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return;
  //   }
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const id = searchParams.get('id');
  const numberOfGames = searchParams.get('numberOfGames') || 'all';

  if (!season || !id || season === 'undefined' || id === 'undefined') {
    return NextResponse.json({ status: 400, message: 'required [season],[id] search params' });
  }

  const GET_PLAYER_STATS_URL = `https://api.sportsdata.io/v3/nba/stats/json/PlayerGameStatsBySeason/${season}/${id}/${numberOfGames}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(GET_PLAYER_STATS_URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
