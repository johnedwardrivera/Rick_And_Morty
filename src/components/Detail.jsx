import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../components/styles/detail.module.css";
const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div className={style.card}>
      <h1 className={style.name}>{character?.name}</h1>
      <p className={style.status}>{character?.status}</p>
      <p className={style.specie}>{character?.specie}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img className={style.img} src={character?.image} alt=""></img>
      <button className={style.btn}>
        <Link className={style.linkhome} to="/home">
          Home
        </Link>
      </button>
    </div>
  );
};
export default Detail;
