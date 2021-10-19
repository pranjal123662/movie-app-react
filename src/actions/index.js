export const ADD_MOVIES = "ADD_MOVIES";
export const FAV_MOVIES = "FAV_MOVIES";
export const REMOVE_FROM_FAVOURITES = "REMOVE _FROM_FAVOURITES";

export function addMovies(movies) {
  // console.log(movies);
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export function favMovies(movie) {
  return {
    type: FAV_MOVIES,
    movie,
  };
}

export function removefromfav(movie) {
  return {
    type: REMOVE_FROM_FAVOURITES,
    movie,
  };
}
