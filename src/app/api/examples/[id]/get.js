import { NextResponse } from 'next/server';

export function GET(request, route) {
  const id = route.params.id;

  return NextResponse.json(
    { ok: true, body: `getting example ${id}` },
    { status: 200 }
  );
}
