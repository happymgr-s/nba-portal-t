// import axios from "axios";
import { Player } from '@/types/player';
import { NextRequest, NextResponse } from 'next/server';
import { freeAgentPlayersMockData } from '@/lib/mockData/playersMockData';

export type GetFreeAgentPlayersProfile = Player[];

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const position = searchParams.get('position');
  // const url = `https://api.sportsdata.io/v3/nba/scores/json/PlayersByFreeAgent?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get(url);
    const result = freeAgentPlayersMockData;

    const filteredPlayers = result.filter((player) => {
      const isPosition = position && position !== 'ALL' ? player.Position === position : true;
      return isPosition;
    });

    return NextResponse.json(filteredPlayers);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
