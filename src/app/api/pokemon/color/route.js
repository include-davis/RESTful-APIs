import { NextResponse } from 'next/server';

async function getPokemonSpecies(name) {
  try {
    const res = await fetch(
      `https://pokeapi.co/api/v2/pokemon-species/${name}`
    );

    const { status, statusText } = res;
    if (res.status !== 200) {
      throw { status, statusText };
    }

    const data = await res.json();

    const { name: color, url } = data.color;
    const out = {
      name,
      color,
      url,
    };

    return { ok: true, body: out };
  } catch (error) {
    return { ok: false, error };
  }
}

export async function GET(request) {
  const queries = request.nextUrl.searchParams;
  const names = JSON.parse(queries.get('names'));
  console.log(names);

  try {
    const calls = names.map((name) => getPokemonSpecies(name));
    const data = await Promise.all(calls);

    return NextResponse.json({ ok: true, body: data }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ ok: false, error }, { status: error.status });
  }
}
