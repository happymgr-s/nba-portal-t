import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Player } from '@/types/player';
import { activePlayersMockData } from '@/lib/mockData/playersMockData';

export type GetActivePlayersProfile = Player[];

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const team = searchParams.get('team');
  const position = searchParams.get('position');

  if (process.env.NODE_ENV !== 'production') {
    const filteredPlayers = activePlayersMockData.filter((player) => {
      const isTeam = team && team !== 'ALL' ? player.Team === team : true;
      const isPosition = position && position !== 'ALL' ? player.Position === position : true;
      return isTeam && isPosition;
    });

    return NextResponse.json(filteredPlayers);
  }

  const url = `https://api.sportsdata.io/v3/nba/scores/json/PlayersActiveBasic?key=${process.env.NBA_API_KEY}`;

  try {
    const result = await axios.get<Player[]>(url);

    const filteredPlayers = result.data.filter((player) => {
      const isTeam = team && team !== 'ALL' ? player.Team === team : true;
      const isPosition = position && position !== 'ALL' ? player.Position === position : true;
      return isTeam && isPosition;
    });

    return NextResponse.json(filteredPlayers);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
