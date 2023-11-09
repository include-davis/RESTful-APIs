import { NextResponse } from 'next/server';

// function name GET handles GET requests
export function GET(request) {
  /**
   * api call example:
   * GET 'htpp://localhost:3000/api/example?name="austin"
   */
  const name = request.nextUrl.searchParams.get('name');
  // name is now "austin"
  return NextResponse.json({ body: name }, { status: 200 });
}
