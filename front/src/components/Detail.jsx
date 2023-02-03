import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../components/styles/detail.module.css";
const Detail = () => {
  const { detailId } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    apidetail();
    return setCharacter({});
  }, [detailId]);
  const apidetail = async () => {
    try {
      const response = await fetch(`http://localhost:3001/detail/${detailId}`);
      const char = await response.json();

      if (char.name) {
        setCharacter(char);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      window.alert("No hay personajes con ese ID");
    }
  };

  return (
    <div className={style.card}>
      <h1 className={style.name}>{character?.name}</h1>
      <p className={style.status}>{character?.status}</p>
      <p className={style.specie}>{character?.species}</p>
      <p className={style.gender}>{character?.gender}</p>
      <p className={style.origin}>{character?.origin}</p>
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
