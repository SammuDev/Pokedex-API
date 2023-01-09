import fetch from 'isomorphic-unfetch';

async function getPokemon(name: string) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.json();
}

export default function FetchApi({ pokemon }: { pokemon: any }) {
  return (
    <div>
      <h1>{pokemon.name}</h1>
      <ul>
        {}
      </ul>
      {/* <img src={pokemon.sprites.front_default} alt={pokemon.name} /> */}
    </div>
  );
};

export async function getServerSideProps(context: any) {
  const pokemon = await getPokemon(context.params.name);
  return {
    props: {pokemon}
  };
};
