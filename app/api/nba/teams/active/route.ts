// import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Team } from '@/types/team';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

export type GetActiveTeamProfileListResponse = Team[];

export async function GET(req: NextRequest) {
  // const url = `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.NBA_API_KEY}`;

  try {
    // リクエスト上限あるのでモックデータ返す
    // const result = await axios.get<GetTeamDataListResponse>(url);
    return NextResponse.json(teamsMockData);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
