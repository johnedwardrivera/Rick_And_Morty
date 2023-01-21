// import React from "react";
import Card from "./Card";
import React, { useEffect } from "react";
import style from "../components/styles/cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;
  useEffect(() => {
    // rendilizar en estado
    console.log(characters);
  });
  return (
    <>
      <div className={style.cointainer}>
        {characters.map((elemento, index) => {
          return (
            <div key={index}>
              <Card
                id={elemento.id}
                name={elemento.name}
                species={elemento.species}
                gender={elemento.gender}
                image={elemento.image}
                onClose={onClose}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}
