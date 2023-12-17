// TODO: Importar card

import PokemonCard from "./PokemonCard"

// TODO: Importar estilos scss

interface Props {
    pokemonsUrls?: string[] | null
    page?: number
    perPage?: number
}

const PokemonList = ({pokemonsUrls, page, perPage}: Props) => {
  return (
    <div>
        {
            pokemonsUrls
                ?.map((pokemonsUrls) => (
                    <PokemonCard key={pokemonsUrls} url={pokemonsUrls} />
                ))
        }
    </div>
  )
}

export default PokemonList