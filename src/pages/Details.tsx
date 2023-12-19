import { useParams } from "react-router-dom"
import { PokemonDetail } from "../components/PokemonDetails/PokemonDetails"
import { usePokemon } from "../hooks/usePokemon"

export const PokeDetails = () => {
  const { name } = useParams()
  const { pokemon } = usePokemon("",name)
  return <PokemonDetail pokemon={pokemon!} />
};