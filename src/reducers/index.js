import { combineReducers } from "redux";
import { ADD_MOVIES } from "../actions";
import { FAV_MOVIES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";
import { SET_FAV } from "../actions";
// import { SEARCH_MOVIE } from "../actions";
import { ADD_SEARCH_RESULT } from "../actions";
import { ADD_MOVIE_TO_LIST } from "../actions";

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
    case ADD_MOVIE_TO_LIST:
      console.log("movie", state.list);
      return {
        ...state,
        list: [action.movie, ...state.list],
      };
    default: {
      return state;
    }
  }
}

const stateForSearch = {
  result: {},
  showSearchResults: false,
};
export function search(state = stateForSearch, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIE_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };

    default: {
      return state;
    }
  }
}

// const initialRootState = {
//   movies: allState,
//   search: stateForSearch,
// };
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
