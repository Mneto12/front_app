import { useParams } from "react-router-dom"
import { PokemonDetail } from "../components/PokemonDetails/PokemonDetails"
import { useContext, useEffect } from "react"
import { PokemonContext } from "../context/PokemonContext"

export const PokeDetails = () => {
  const { name } = useParams()
  const { pokemon , getPokemon} = useContext(PokemonContext)

  useEffect(() => {
    // @ts-ignore
    getPokemon(name)
  }, [])

  return <PokemonDetail pokemon={pokemon!} />
};