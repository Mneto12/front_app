import { usePokemon } from "../hooks/usePokemon"
import { background } from "../utils/backgroundByType"
import { Link } from "react-router-dom"
import { Loader } from "rsuite"
// TODO: Import scss

interface Props {
    url: string
}

const PokemonCard = ({url}: any) => {
    // @ts-ignore
    const backgroundSelected = background[url?.type[0]]
  
    return (
    <Link to={`/${url?.name}`}>
        <div>
            <span style={{borderColor: backgroundSelected}}>#{url?.IdPoke}</span>
            {url?.image ? (
                <img 
                    src={url.image}
                    alt={url.name} 
                />
            ):(
                <div className="none">
                    <h1>Loading...</h1>
                    // TODO: Fix problems process is not defined with loader
                    {/* <Loader center size="md" /> */}
                </div>
            )}
            <div>
                {url?.name}
            </div>
        </div>
    </Link>
  )
}

export default PokemonCard