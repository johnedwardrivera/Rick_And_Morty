import { React, useEffect, useState } from "react";
import style from "../components/styles/card.module.css";
import { Link } from "react-router-dom";
import { addFavorites, deleteFavorites } from "../redux/actions";
import { connect, useDispatch } from "react-redux";

export function Card(props) {
  const {
    id,
    name,
    species,
    gender,
    image,
    onClose,
    addFavorites,
    deleteFavorites,
    myFavorites,
  } = props;
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      // dispatch(deleteFavorites(id));
      props.deleteFavorites(id);
    } else {
      setIsFav(true);
      // dispatch(addFavorites(props));
      props.addFavorites(props);
    }
  };
  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={style.btn} onClick={() => onClose(id)}>
        x
      </button>
      <Link className={style.linkdetail} to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <img src={image} alt="" style={{ height: "150px" }} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});
export function mapDispatchToProps(dispatch, props) {
  return {
    addFavorites: (myFavorites) => dispatch(addFavorites(myFavorites)),
    deleteFavorites: (id) => dispatch(deleteFavorites(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);
