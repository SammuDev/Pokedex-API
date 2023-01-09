import Image from "next/image";

type Props = {
  pokemon: {
    name: string;
    id: number;
  }
}

const Card = ({pokemon}: Props) => {
  return (
    <div>
      <img src={`http://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      {/* <Image src={`http://cdn.traction.one/pokedex/pokemon/${pokemon.id}.png`} */}
      {/* <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={120}
        height={120}
        alt={pokemon.name}/> */}

      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default Card;
