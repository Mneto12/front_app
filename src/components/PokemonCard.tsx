import { usePokemon } from "../hooks/usePokemon"
import { background } from "../utils/backgroundByType"
import { Link } from "react-router-dom"
import { Loader } from "rsuite"
// TODO: Import scss

interface Props {
    url: string
}

const PokemonCard = ({url}: Props) => {
    const { pokemon } = usePokemon(url)

    // @ts-ignore
    const backgroundSelected = background[pokemon?.types[0]?.type?.name]
  
    return (
    <Link to={`/${pokemon?.id}`}>
        <div>
            <span style={{borderColor: backgroundSelected}}>#{pokemon?.id}</span>
            {pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default ? (
                <img 
                    src={
                        pokemon?.sprites?.other?.dream_world?.front_default ||
                        pokemon?.sprites?.front_default
                    }
                    alt={pokemon.name} 
                />
            ):(
                <div className="none">
                    // TODO: Fix problems process is not defined
                    {/* <Loader center size="md" /> */}
                </div>
            )}
            <div>
                {pokemon?.name}
            </div>
        </div>
    </Link>
  )
}

export default PokemonCard