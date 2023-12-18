import { useContext } from "react"
import { PokemonContext } from "../context/PokemonContext"
import PokemonList from "../components/PokemonList"
import { Pagination } from "../components/PokemonPagination"
import { usePagination } from "../hooks/usePagination"
import { Filters } from "../components/PokemonFilter"

const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext)
  const { page, nextPage, previousPage, backToHome} = usePagination()

  let perPage = 10

  return (
    <div>
        <header>
            <h1>PokeDex</h1>
        </header>
        <Filters />
        <PokemonList 
          pokemonsUrls={pokemonsFiltered}
          page={page}
          perPage={perPage}
        />
        <Pagination 
          page={page}
          nextPage={nextPage}
          previousPage={previousPage}
          perPage={perPage}
          maxItems={pokemonsFiltered?.length}
        />
    </div>
  )
}

export default Home