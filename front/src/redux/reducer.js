import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./action-types";
const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };
    case DELETE_FAVORITES:
      let filterfavorites = state.myFavorites.filter(
        (favorites) => favorites.id != action.payload
      );
      return {
        ...state,
        myFavorites: filterfavorites,
      };
    case FILTER:
      let filtercopia = [...state.allCharacters];
      const filterNew = filtercopia.filter(
        (character) => character.gender == action.payload
      );
      return {
        ...state,
        myFavorites: filterNew,
      };
    case ORDER:
      let copyAllcharacters = [...state.allCharacters];

      if (action.payload == "Ascendente") {
        copyAllcharacters.sort();
      } else {
        copyAllcharacters.sort().reverse();
      }
      return {
        ...state,
        myFavorites: copyAllcharacters,
      };

    default:
      return { ...state };
  }
};
export default reducer;
