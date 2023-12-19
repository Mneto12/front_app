// import { HeightIcon, WeightIcon } from "../../../../assets/stats";
import { IPokemon } from "../../interfaces/interfaces";

import styles from "./styles.module.scss";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div>
      <div>
        {/* <WeightIcon /> */}
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div>
        {/* <HeightIcon /> */}
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
