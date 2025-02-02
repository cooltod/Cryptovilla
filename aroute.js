import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_CRYPTORANK_API_KEY;
  const url = `https://api.cryptorank.io/v1/currencies?api_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    return NextResponse.json(response.data.data.slice(0, 10)); // Top 10 coins
  } catch (error) {
    return NextResponse.json({ error: "API Error" }, { status: 500 });
  }
}