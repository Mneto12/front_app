import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

export const usePokemon = (url?: string, name?: string) => {
    const [pokemon, setPokemon] = useState<null | undefined>()

    const getPokemon = async () => {
        if(url){
            console.log('nada')
        }
        if (name) {
            const { data }: any = await axios.get(
                `http://localhost:8000/api/pokemons/${name}`
            )

            setPokemon(data)
        }
    }

    useEffect(() => {
        console.log('use fecth')
        getPokemon()
    },[])

    return { pokemon }
}
