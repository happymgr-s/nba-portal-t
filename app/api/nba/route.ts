import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  return NextResponse.json({ apiUrl: process.env.NEXT_PUBLIC_API_URL });
}
