import { background } from "../utils/backgroundByType"
import { Link } from "react-router-dom"
import { Loader } from "./Loader"

import styles from '../styles/pokeCard.module.scss'

const PokemonCard = ({url}: any) => {
    // @ts-ignore
    const backgroundSelected = background[url?.type[0]]
  
    return (
    <Link to={`/${url?.name}`} className={styles.pokeCard}>
        <div style={{ borderColor: backgroundSelected }} className={styles.top}>
            <span style={{borderColor: backgroundSelected}}>#{url?.IdPoke}</span>
            {url?.image ? (
                <img 
                    src={url.image}
                    alt={url.name}
                    className={styles.cardImage}
                />
            ):(
                <div>
                    <Loader color={backgroundSelected} />
                </div>
            )}
            <div style={{ background: backgroundSelected }} className={styles.bottom}>
                {url?.name}
            </div>
        </div>
    </Link>
  )
}

export default PokemonCard