import { useState } from "react";
import style from "../components/styles/searchBar.module.css";
export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = useState("");
  const onChange = (evento) => {
    setCharacter(evento.target.value);
  };

  return (
    <>
      <div className={style.container}>
        <input className={style.input} onChange={onChange} type="search" />
        <button className={style.btn} onClick={() => onSearch(character)}>
          Agregar
        </button>
      </div>
    </>
  );
}
