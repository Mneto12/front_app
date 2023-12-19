import { background } from "../../utils/backgroundByType";
import { IPokemon } from "../../interfaces/interfaces";
import { PokeTypes } from "./PokemonDetailsTypes";
// TODO: Import scss

// interface Props {
//   pokemon: IPokemon | null;
// }

export const PokemonDetail = ({ pokemon }: any) => {
  /* @ts-ignore */
  const backgroundSelected = background[pokemon.props?.types[0]?.type?.name];
  if (!pokemon) {
    return (
      <div
        style={{ background: backgroundSelected }}
      >
      </div>
    );
  }

  return (
    <div style={{ background: backgroundSelected }}>
      {/* <Header pokemon={pokemon} /> */}
      <div>
        <img
          src={pokemon.sprite}
          alt={pokemon?.name}
        />
        <PokeTypes pokemon={pokemon.props} />
        {/* <Title content="About" backgroundSelected={backgroundSelected} />
        <Stats pokemon={pokemon} />
        <Title content="Base Stats" backgroundSelected={backgroundSelected} />
        <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} /> */}
      </div>
    </div>
  );
};