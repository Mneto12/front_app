import { Children, createContext, useState } from "react";
import { PokeType } from "../interfaces/types";

interface ContextProps {
    types: PokeType[]
    FilterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContex<ContextProps>({} as ContextProps)

const PokemonProvider = ({}) => {
    let AllPokemonUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

    const defaultState: PokeType = {
        name: 'All',
        url: AllPokemonUrl
    }

    const [AllPokemons, setAllPokemons] = useState(null)
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null)

    const [types, setTypes] = useState([defaultState])
    const [filterSelected]
    return <PokemonProvider>{Children}</PokemonProvider>
}

export default PokemonProvider