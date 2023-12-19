import { createContext, useEffect, useState } from "react";
import { 
    AllPokemonsResult,
 } from "../interfaces/types";
import axios from "axios";

interface ContextProps {
    pokemon: any
    pokemonsFiltered: string[] | null
    getPokemonByName: (name: string) => void
    getPokemon: (name: string) => void
    IsLoading: boolean
    setIsLoading: any
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps)

const PokemonProvider = ({ children }: any) => {
    let AllPokemonsUrl = 'http://localhost:8000/api/pokemons/getAll'

    const [AllPokemons, setAllPokemons] = useState(null)
    const [pokemonsFiltered, setPokemonsFiltered] = useState(null)
    const [pokemons, setPokemons] = useState(null)
    const [pokemon, setPokemon] = useState(null)
    const [IsLoading, setIsLoading] = useState(true)

    const getPokemonByName = async (name: string) => {
        if (name !== '') {
            // @ts-ignore
            let pokemonByName = pokemons.filter((pokemon: AllPokemonsResult) => pokemon.name === name)
            if( pokemonByName.length !== 0 ) {
                console.log(pokemonByName)
                setPokemonsFiltered(pokemonByName)
            } else {
                setPokemonsFiltered(AllPokemons)
            }
        } else {
            setPokemonsFiltered(AllPokemons)
        }
    }

    const getPokemon = async (name: string) => {
        const { data }: any = await axios.get(`http://localhost:8000/api/pokemons/${name}`)
        if ( data ) setPokemon(data)
    }

    const getAllPokemons = async () => {
        const { data } = await axios.get(AllPokemonsUrl);
        setPokemons(data)
        setAllPokemons(data);
        setPokemonsFiltered(data);
    }

    useEffect(() => {
        getAllPokemons()
        getPokemon('pikachu')
    }, [])

    return (
        <PokemonContext.Provider
            value={{
                pokemonsFiltered,
                pokemon,
                getPokemon,
                getPokemonByName,
                IsLoading,
                setIsLoading
            }}
        >
            {children}
        </PokemonContext.Provider>
    )
}

export default PokemonProvider