import { NextResponse } from 'next/server';

export async function GET(request) {
  const pokemonName = request.nextUrl.searchParams.get('name');
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${pokemonName}`
    );

    const { status, statusText } = res;
    if (res.status != 200) {
      throw { status, statusText };
    }

    const data = await res.json();
    return NextResponse.json({ body: data }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: error.status });
  }
}
