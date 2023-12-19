import PokemonCard from "./PokemonCard"
import { Loader } from "./Loader"   
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import styles from '../styles/pokeList.module.scss'


interface Props {
    pokemonsUrls?: string[] | null
    page: number
    perPage: number
}

const PokemonList = ({pokemonsUrls, page, perPage}: Props) => {
  const { setIsLoading } = useContext(PokemonContext)
  setIsLoading(true)
  return (
    <div>
      {
        // @ts-ignore
        pokemonsUrls && pokemonsUrls.length > 0 ? (
          <div className={styles.pokemons}>
            {
              pokemonsUrls
              ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
              ?.map((pokemonsUrls) => (
                      <PokemonCard key={pokemonsUrls} url={pokemonsUrls} />
              ))
            }
          </div>
            ) : (
              <div className={styles.loader}>
                <Loader size={200} color={'#AAA67F'} />
              </div>
            )
        }
    </div>
  )
}

export default PokemonList