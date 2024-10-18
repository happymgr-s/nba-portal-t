import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Player } from '@/types/player';
import { freeAgentPlayersMockData } from '@/lib/mockData/playersMockData';

export type GetPlayerProfileById = Player;

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  if (process.env.NODE_ENV !== 'production') {
    const playerProfile = freeAgentPlayersMockData.find((player) => player.PlayerID === Number(id));
    return NextResponse.json(playerProfile);
  }

  const url = `https://api.sportsdata.io/v3/nba/scores/json/PlayersByFreeAgent?key=${process.env.NBA_API_KEY}`;

  try {
    const result = await axios.get<Player[]>(url);
    const playerProfile = result.data.find((player) => player.PlayerID === Number(id));

    return NextResponse.json(playerProfile);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
