import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定したシーズンにおける全選手のスタッツを取得
 * @param season 必須検索パラメータ 2024 2024PRE
 * @returns スタッツ
 */
export async function GET(req: NextRequest) {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return;
  //   }
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');

  if (!season)
    return NextResponse.json({ status: 400, message: 'required [season] search params' });

  const GET_PLAYER_STATS_URL = `https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/${season}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(GET_PLAYER_STATS_URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
