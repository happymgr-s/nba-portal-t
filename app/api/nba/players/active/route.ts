// import axios from "axios";
import { NextRequest, NextResponse } from 'next/server';
import { Player } from '@/types/player';
import { activePlayersMockData } from '@/lib/mockData/playersMockData';

export type GetActivePlayersProfile = Player[];

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const team = searchParams.get('team');
  const position = searchParams.get('position');

  // const url = `https://api.sportsdata.io/v3/nba/scores/json/PlayersActiveBasic?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get(url);
    const result = activePlayersMockData;

    console.log(result);

    const filteredPlayers = result.filter((player) => {
      const isTeam = team ? player.Team === team : true;
      const isPosition = position ? player.Position === position : true;
      return isTeam && isPosition;
    });

    console.log(filteredPlayers);

    return NextResponse.json(filteredPlayers);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
