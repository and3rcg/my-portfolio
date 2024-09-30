import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();

    const response = await fetch(
      `${process.env.API_URL}/contact`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.API_KEY}`,
      },
      body: JSON.stringify(requestData),
    }
    );
    const responseJSON = await response.json();

    return NextResponse.json(responseJSON, { status: response.status })
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
