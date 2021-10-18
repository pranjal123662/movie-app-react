import { ADD_MOVIES } from "../actions";
const allState = {
  list: [],
  favourite: [],
};
export default function movies(state = allState, action) {
  if (action.type === ADD_MOVIES) {
    return {
      ...state,
      list: action.movies,
    };
  }
  return state;
}
