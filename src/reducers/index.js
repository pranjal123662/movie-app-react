import { ADD_MOVIES } from "../actions";
import { FAV_MOVIES } from "../actions";

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
        favourite: [...action],
      };
    default: {
      return state;
    }
  }
}
