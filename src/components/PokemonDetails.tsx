import { background } from "../utils/backgroundByType";
import { IPokemon } from "../interfaces/interfaces";
// TODO: Import scss

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {
  // @ts-ignore
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  if (!pokemon) {
    return (
      <div
        style={{ background: backgroundSelected }}
      >
        // TODO: Loader
      </div>
    )
  }

  return (
    <div>
      
    </div>
  );
};