import { NextResponse } from "next/server";


// export async function GET(req: Request) leaving this here once I implement querystrings in the backend
export async function GET() {
  try {
    const response = await fetch(`${process.env.API_URL}/projects`);
    const responseJSON = await response.json();
    return NextResponse.json(responseJSON, { status: 200 })
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err }, { status: 500 })
  }
}
