import Image from "next/image";
import BodyCustom from "../../styles/styledsCard/BodyCustom";

type Props = {
  poke: {
    name: string;
    id: number;
  };
};

const Card = ({poke}: Props) => {
  return (
    <BodyCustom>
      #{poke.id < 10 ? `00${poke.id}` : poke.id < 100 ? `0${poke.id}` : `${poke.id}`} - {poke.name}

      {/* <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`} alt={pokemon.name} /> */}
      {/* <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
        alt={poke.name}
        width={100}
        height={100}/> */}
    </BodyCustom>
  );
};

export default Card;
