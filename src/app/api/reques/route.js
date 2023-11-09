import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  try {
    const res = await fetch(`https://reqres.in/api/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();

    return NextResponse.json({ body: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: error.status });
  }
}
