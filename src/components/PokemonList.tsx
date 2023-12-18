// TODO: Importar card

import PokemonCard from "./PokemonCard"

// TODO: Importar estilos scss

interface Props {
    pokemonsUrls?: string[] | null
    page: number
    perPage: number
}

const PokemonList = ({pokemonsUrls, page, perPage}: Props) => {
  console.log(pokemonsUrls)
  return (
    <div>
        {
          // @ts-ignore
          pokemonsUrls && pokemonsUrls.length > 0 ? (
            pokemonsUrls
            ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            ?.map((pokemonsUrls) => (
                    <PokemonCard key={pokemonsUrls} url={pokemonsUrls} />
            ))
          ) : (
            <h1>No hay pokemones</h1>
          )
        }
    </div>
  )
}

export default PokemonList