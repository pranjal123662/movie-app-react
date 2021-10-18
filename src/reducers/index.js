const allState = [
  {
    list: [],
    favourite_movies: [],
  },
];
export default function movies(state = allState, action) {
  if (action.type === "ADD_MOVIES") {
    return action.movies;
  }
  return state;
}
