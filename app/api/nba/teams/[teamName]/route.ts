import { NextRequest, NextResponse } from 'next/server';
import { Team } from '@/types/team';
import { teamsMockData } from '@/lib/mockData/teamsMockData';

export type GetTeamProfileByTeamName = Team;

export async function GET(req: NextRequest, { params }: { params: { teamName: string } }) {
  const { teamName } = params;
  const url = `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get(url);
    const teamProfile = teamsMockData.find((team) => team.Key === teamName);
    return NextResponse.json(teamProfile);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
