import { createContext, useEffect, useState } from "react";
import { 
    PokeType,
    AllPokemonsResult,
    PokemonsByTypeResult
 } from "../interfaces/types";
import axios from "axios";

interface ContextProps {
    types: PokeType[]
    filterSelected: PokeType
    pokemonsFiltered: string[] | null
    changeTypeSelected: (type: PokeType) => void
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({ children }: any) => {
    let AllPokemonsUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0'

    const defaultState: PokeType = {
        name: 'All',
        url: AllPokemonsUrl
    }

    const [AllPokemons, setAllPokemons] = useState(null)
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null)

    const [types, setTypes] = useState([defaultState])
    const [filterSelected, setFilteredSelected] = useState(defaultState)

    const changeTypeSelected = async (type: PokeType) => {
        setFilteredSelected(type)

        const { data } = await axios.get(type?.url!)

        let pokemons = data?.pokemon?.map(
            ({ pokemon }: PokemonsByTypeResult) => pokemon?.url
        )

        type.name !== 'All'
            ? setPokemonsFiltered(pokemons)
            : setPokemonsFiltered(AllPokemons)
    }

    const getPokemonsType = async () => {
        const { data } = await axios.get("https://pokeapi.co/api/v2/type")

        setTypes([...types, ...data.results])
    }

    const getAllPokemons = async () => {
        const { data } = await axios.get(AllPokemonsUrl);

        let pokemons = data?.results?.map(
        (pokemon: AllPokemonsResult) => pokemon?.url
        );

        setAllPokemons(pokemons);
        setPokemonsFiltered(pokemons);
    }

    useEffect(() => {
        getPokemonsType()
        getAllPokemons()
    }, [])

    return (
        <PokemonContext.Provider
            value={{
                types,
                filterSelected,
                pokemonsFiltered,
                changeTypeSelected
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider