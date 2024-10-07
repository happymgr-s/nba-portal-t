// import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { Player } from '@/types/player';
import { activePlayersMockData } from '@/lib/mockData/playersMockData';

export type GetPlayerProfileById = Player;

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const { id } = params;

  // const url = `https://api.sportsdata.io/v3/nba/scores/json/PlayersActiveBasic?key=${process.env.NBA_API_KEY}`;

  try {
    // const result = await axios.get(url);
    const playerProfile = activePlayersMockData.find((player) => player.PlayerID === Number(id));

    return NextResponse.json(playerProfile);
  } catch (error) {
    // return NextResponse.json({ error: error, status: 500 });
    return NextResponse.json([]);
  }
}
