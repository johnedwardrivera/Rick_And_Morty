import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action-types";

export const addFavorites = (favorites) => {
  // return { type: ADD_FAVORITES, payload: favorites };
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/rickandmorty", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(favorites),
    });
    const data = await response.json();
    console.log("data", data);
    console.log("favorites", favorites);
    return dispatch({
      type: ADD_FAVORITES,
      payload: data[data.length - 1],
    });
  };
};
export const deleteFavorites = (id) => {
  // return { type: DELETE_FAVORITES, payload: id };
  return async (dispatch) => {
    const response = await fetch("http://localhost:3001/rickandmorty/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log(data);

    return dispatch({
      type: DELETE_FAVORITES,
      payload: id,
    });
  };
};
export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
