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
    getPokemonByName: (name: string) => void
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
    const [pokemons, setPokemons] = useState(null)

    const [types, setTypes] = useState([defaultState])
    const [filterSelected, setFilteredSelected] = useState(defaultState)

    const getPokemonByName = async (name: string) => {
        console.log(name)

        if (name !== '') {
            let pokemonByName = pokemons.filter((pokemon: AllPokemonsResult) => pokemon.name === name)
            console.log(pokemonByName)
            if( pokemonByName.length !== 0 ) {
                setPokemonsFiltered(pokemonByName.map((pokemon: AllPokemonsResult) => pokemon?.url))
            } else {
                setPokemonsFiltered(AllPokemons)
            }
        } else {
            setPokemonsFiltered(AllPokemons)
        }
    }

    const changeTypeSelected = async (type: PokeType) => {
        setFilteredSelected(type)

        const { data } = await axios.get(type?.url!)

        let pokemons = data?.pokemon?.map(
            ({ pokemon }: PokemonsByTypeResult) => pokemon?.url
        )

        console.log(pokemons)

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

        setPokemons(data?.results)
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
                changeTypeSelected,
                getPokemonByName
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider