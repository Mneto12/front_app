import { useContext, useState, ChangeEvent, KeyboardEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";
import { usePagination } from "../hooks/usePagination";
import { PokeType } from "../interfaces/types";

// TODO: import scss

export const Filters = () => {
  // const [open, setOpen] = useState(false)

  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setInputValue(value)
  };

  useEffect(() => {
    getPokemonByName(inputValue);
  }, [inputValue])

  const navigate = useNavigate()

  const { types, filterSelected, getPokemonByName } = useContext(PokemonContext)

  // const { changePage } = usePagination()

  // const onChangeType = (type: PokeType) => {
  //   changePage(1)

  //   navigate("/?page=1")
    
  //   changeTypeSelected(type)
  // };

  return (
    <div>
      <input
      type="text"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="Escribe algo..."
    />
    </div>
  )
}