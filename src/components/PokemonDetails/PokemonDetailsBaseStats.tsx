// import { HeightIcon, WeightIcon } from "../../../../assets/stats";
import { IPokemon } from "../../interfaces/interfaces";

import styles from '../../styles/pokeDetailsStats.module.scss'

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetailBaseStats = ({ pokemon }: Props) => {
  return (
    <div className={styles.stats}>
      <div className={styles.item}>
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className={styles.item}>
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
