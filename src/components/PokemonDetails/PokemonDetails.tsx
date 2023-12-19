import { background } from "../../utils/backgroundByType";
import { PokeTypes } from "./PokemonDetailsTypes";
import { PokemonDetailBaseStats } from "./PokemonDetailsBaseStats";
import styles from '../../styles/pokeDetails.module.scss'
import { PokemonDetailsTitle } from "./PokemonDetailsTitle";
import { PokeDetailsHeader } from "./PokemonDetailsHeader";
import { useContext } from "react";
import { PokemonContext } from "../../context/PokemonContext";
import { Loader } from "../Loader";
import { useNavigate } from "react-router-dom";

export const PokemonDetail = ({ pokemon }: any) => {
  const navigate = useNavigate()

  if (pokemon === null || !pokemon) {
    navigate(`/error`);
    return
  }

  //@ts-ignore
  const backgroundSelected = background[pokemon.props?.types[0]?.type?.name]
  const { IsLoading , setIsLoading } = useContext(PokemonContext)

  setTimeout(() => {
    setIsLoading(false)
  }, 1200)

  return (
    <div>
      { !IsLoading ? (
            <div style={{ background: backgroundSelected }} className={styles.bg}>
            <PokeDetailsHeader pokemon={pokemon.props} />
            <div className={styles.info}>
              <img
                src={pokemon.sprite}
                alt={pokemon?.name}
              />
              <PokeTypes pokemon={pokemon.props} />
              <PokemonDetailsTitle content="About" backgroundSelected={backgroundSelected} />
              <PokemonDetailBaseStats pokemon={pokemon.props} />
            </div>
          </div>
        ) : (
          <div className={styles.loaderContainer}>
            <Loader size={200} color={'#AAA67F'} />
          </div>
        )
      }
    </div>
  )
}