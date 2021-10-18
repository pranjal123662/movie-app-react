export const ADD_MOVIES = "ADD_MOVIES";

export default function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}
