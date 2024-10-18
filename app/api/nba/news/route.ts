import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { NewsItem } from '@/types/news';
import { newsMockData } from '@/lib/mockData/newsMockData';

export type GetNewsResponse = NewsItem[];

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV !== 'production') {
    return NextResponse.json(newsMockData);
  }
  const getNewsUrl = `https://api.sportsdata.io/v3/nba/scores/json/News?key=${process.env.NBA_API_KEY}`;
  try {
    const result = await axios.get<GetNewsResponse>(getNewsUrl);
    return NextResponse.json(result.data);
  } catch (error) {
    return NextResponse.json([]);
  }
}
