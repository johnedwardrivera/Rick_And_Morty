import React from "react";
import style from "../components/styles/card.module.css";
import { Link } from "react-router-dom";
export default function Card(props) {
  const { id, name, species, gender, image, onClose } = props;
  return (
    <div className={style.card}>
      <>
        <button className={style.btn} onClick={() => onClose(id)}>
          x
        </button>
        <Link to={`/detail/${id}`}>
          <h2>{name}</h2>
        </Link>
        <h2>{species}</h2>
        <h2>{gender}</h2>
        <img src={image} alt="" style={{ height: "150px" }} />
      </>
    </div>
  );
}
