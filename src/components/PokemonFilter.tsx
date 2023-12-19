import { useContext, useState, ChangeEvent, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext";

import styles from '../styles/filter.module.scss'

export const Filters = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  };

  useEffect(() => {
    getPokemonByName(inputValue);
  }, [inputValue])

  const { getPokemonByName } = useContext(PokemonContext)

  return (
    <div className={styles.divFilter}>
      <input
      className={styles.inputPokedex}
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Escribe un pokemon"
    />
    </div>
  )
}