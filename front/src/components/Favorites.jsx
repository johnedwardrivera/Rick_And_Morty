import React from "react";
import { connect } from "react-redux";
import style from "../components/styles/favorites.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { orderCards, filterCards } from "../redux/actions";
export const Favorites = (props) => {
  const dispatch = useDispatch();
  const handlechangeorder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handlechangender = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div>
        <select className={style.select} onChange={handlechangeorder}>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.select} onChange={handlechangender}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      <div className={style.cointainer}>
        {props.myFavorites.map((favorite, id) => {
          return (
            <div className={style.card} key={id}>
              <Link className={style.linkdetail} to={`/detail/${id}`}>
                <h2 className={style.name}>{favorite.name}</h2>
              </Link>
              <h2>{favorite.species}</h2>
              <h2>{favorite.gender}</h2>
              <img
                className={style.imgfavorite}
                src={favorite.image}
                alt=""
                style={{ height: "150px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps)(Favorites);
