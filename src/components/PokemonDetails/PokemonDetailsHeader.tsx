import { useNavigate } from "react-router-dom"
import { IPokemon } from "../../interfaces/interfaces"

import styles from '../../styles/pokeDetailsHeader.module.scss'
import { PokeballIconBig } from "../../assets/pokeball";
import { ArrowLeftIcon } from "../../assets/arrows";

interface Props {
  pokemon: IPokemon | null
}

export const PokeDetailsHeader = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  return (
    <header>
      <PokeballIconBig className={styles.pokeball} />
      <div className={styles.left}>
        <ArrowLeftIcon onClick={() => navigate(-1)} />

        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};
