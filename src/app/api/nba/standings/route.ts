import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Standing } from '@/types/standing';
import { closedSeasonStandingsMockData } from '@/lib/mockData/standingsMockData';

export type GetStandingsResponse = Standing[];

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const season = searchParams.get('season');

  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.json(closedSeasonStandingsMockData);
  }

  const GET_STANDINGS_URL = `https://api.sportsdata.io/v3/nba/scores/json/Standings/${season}?key=${process.env.NBA_API_KEY}`;
  try {
    const result = await axios.get<GetStandingsResponse>(GET_STANDINGS_URL);
    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
