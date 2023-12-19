import { IPokemon } from "../../interfaces/interfaces";
import { background } from "../../utils/backgroundByType";

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  return (
    <div>
      {/* @ts-ignore */}
      {pokemon?.types.map(({ type: { name } }) => (
        <div
          key={name}
          /* @ts-ignore */
          style={{ background: background[name] }}
        >
          {name}
        </div>
      ))}
    </div>
  );
};
