import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
  try {
    const requestData = await req.json();

    const response = await fetch(
      `${process.env.API_URL}/contact`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestData),
    }
    );
    const responseJSON = await response.json();

    if (response.status != 200) {
      return NextResponse.json(responseJSON, { status: response.status })
    }

    return NextResponse.json(responseJSON, { status: 200 })
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
