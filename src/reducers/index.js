import { combineReducers } from "redux";
import { ADD_MOVIES } from "../actions";
import { FAV_MOVIES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";
import { SET_FAV } from "../actions";
import { SEARCH_MOVIE } from "../actions";

const allState = {
  list: [],
  favourite: [],
  setFav: false,
};
export function movies(state = allState, action) {
  console.log(state);
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case FAV_MOVIES:
      return {
        ...state,
        favourite: [action.movie, ...state.favourite],
      };
    case REMOVE_FROM_FAVOURITES:
      const filteredArray = state.favourite.filter(
        (movie) => movie.Title !== action.movie.Title
      );
      return {
        ...state,
        favourite: filteredArray,
      };
    case SET_FAV:
      return {
        ...state,
        setFav: action.val,
      };
    default: {
      return state;
    }
  }
}

const stateForSearch = {
  result: {},
};
export function search(state = stateForSearch, action) {
  return state;
}

const initialRootState = {
  movies: allState,
  search: stateForSearch,
};
// export default function rootReducer(state = initialRootState, action) {
//   return {
//     movies: movies(state.movies, action),
//     search: search(state.search, action),
//   };
// }

export default combineReducers({
  movies,
  search,
});
