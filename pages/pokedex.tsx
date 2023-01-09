import Link from "next/link"
// import searchPokemons from "../components/searchPokemons"

// import { useEffect, useState } from 'react';

// type PokeProps = {
//   url?: string;
// }

export const pokedex = () => {
  // const [data, setData] = useState<string[]>([]);

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
      {/* {a ? (<div>NOME: {a.name}</div>)} */}
    </div>
  )
}
