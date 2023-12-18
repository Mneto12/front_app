import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import PokemonList from "../components/PokemonList"

const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext)
  return (
    <div>
        <header>
            <h1>PokeDex</h1>
        </header>
        <PokemonList pokemonsUrls={pokemonsFiltered} />
    </div>
  )
}

export default Home