import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定したチームの各選手のシーズンスタッツを取得
 * @param season 必須検索パラメータ ex) 2024 2024PRE
 * @param team 必須検索パラメータ ex) GS LAL
 * @returns シーズン成績
 */
export async function GET(req: NextRequest) {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return;
  //   }
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const team = searchParams.get('team');

  if (!season || !team || season === 'undefined' || team === 'undefined') {
    return NextResponse.json({ status: 400, message: 'required [season],[team] search params' });
  }

  const GET_PLAYER_STATS_URL = `https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByTeam/${season}/${team}?key=${process.env.NBA_API_KEY}`;
  try {
    const response = await fetch(GET_PLAYER_STATS_URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
