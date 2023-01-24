import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action-types";
export const addFavorites = (favorites) => {
  return { type: ADD_FAVORITES, payload: favorites };
};
export const deleteFavorites = (id) => {
  return { type: DELETE_FAVORITES, payload: id };
};
export const filterCards = (status) => {
  return { type: FILTER, payload: status };
};
export const orderCards = (id) => {
  return { type: ORDER, payload: id };
};
