import styles from "../../styles/pokeDetailsTitle.module.scss"

interface Props {
  content: string
  backgroundSelected: string
}

export const PokemonDetailsTitle = ({ content, backgroundSelected }: Props) => {
  return (
    <span className={styles.title} style={{ color: backgroundSelected }}>
      {content}
    </span>
  )
}
