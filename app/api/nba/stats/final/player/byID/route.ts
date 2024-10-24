import { NextRequest, NextResponse } from 'next/server';

/**
 * 指定したシーズンにおける特定の選手のシーズン成績を取得
 * @param season 必須検索パラメータ 2024 2024PRE
 * @param id 必須検索パラメータ
 * @returns シーズン成績
 */
export async function GET(req: NextRequest) {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return;
  //   }
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');
  const id = searchParams.get('id');

  if (!season || !id)
    return NextResponse.json({ status: 400, message: 'required [season],[id] search params' });

  const GET_PLAYER_STATS_URL = `https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStatsByPlayer/${season}/${id}?key=${process.env.NBA_API_KEY}
`;
  try {
    const response = await fetch(GET_PLAYER_STATS_URL, { cache: 'no-store' });
    const json = await response.json();

    return NextResponse.json(json);
  } catch (error) {
    return NextResponse.json([]);
  }
}
