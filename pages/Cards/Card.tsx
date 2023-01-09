type Props = {
  pokemon: {
    name: string;
    id: number;
  }
}

const Card = ({pokemon}: Props) => {
  return (
    <div>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default Card;
