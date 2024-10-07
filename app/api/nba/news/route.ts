// import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { NewsItem } from '@/types/news';
import { newsMockData } from '@/lib/mockData/newsMockData';

export type GetNewsResponse = NewsItem[];

export async function GET(req: NextRequest) {
  // const getNewsUrl = `https://api.sportsdata.io/v3/nba/scores/json/News?key=${process.env.NBA_API_KEY}`;
  try {
    // const result = await axios.get(getNewsUrl)
    return NextResponse.json(newsMockData);
  } catch (error) {
    return NextResponse.json([]);
  }
}
