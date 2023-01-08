import Link from "next/link"
import searchPokemons from "../components/searchPokemons"

export default function pokedex() {

  const url = `https://pokeapi.co/api/v2/pokemon/pikachu`

  searchPokemons(url)

  return (
    <div>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>

      {/* {a && a.map((obj: any) => <div key={obj.id}>NOME: {obj.id}</div>)} */}
      {/* {a ? (<div>NOME: {a.name}</div>)} */}
    </div>
  )
}
