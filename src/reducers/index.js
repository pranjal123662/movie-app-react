import { ADD_MOVIES } from "../actions";
import { FAV_MOVIES } from "../actions";
import { REMOVE_FROM_FAVOURITES } from "../actions";

const allState = {
  list: [],
  favourite: [],
};
export default function movies(state = allState, action) {
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
        favourites: filteredArray,
      };
    default: {
      return state;
    }
  }
}
