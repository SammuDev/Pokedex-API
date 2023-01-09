import BodyCustom from "../../styles/styledsCard/BodyCustom";

type Props = {
  pokemon: {
    name: string;
    id: number;
  }
}

const Card = ({pokemon}: Props) => {
  return (
    <BodyCustom>
      <h2>#{pokemon.id} - {pokemon.name}</h2>

      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name} />
    </BodyCustom>
  );
};

export default Card;
