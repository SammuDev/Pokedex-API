import Link from "next/link"
// import searchPokemons from "../components/searchPokemons"

import fetch from 'isomorphic-unfetch'

import { useEffect, useState } from 'react';

export interface PokeProps {
  name: string;
  id: number;
  types: Array<{ type: { name: string } }>;
}

export default function pokedex() {
  const [data, setData] = useState<PokeProps[]>([]);

  // const getData = async () => {
  //   try {
  //     const res = await fetch(`url`);
  //     const resJson = await res.json();
  //     console.log(resJson);

  //     setData(resJson)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // };

  const getPokemon = async (name: string): Promise<PokeProps> => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const resJson = await res.json();

    setData(resJson);
  };

  // useEffect(() => {
  //   getData();
  // }),[];

  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      {/* {data && data.map((obj: any) => <div key={obj.id}>NOME: {obj.id}</div>)} */}
    </div>
  )
}
