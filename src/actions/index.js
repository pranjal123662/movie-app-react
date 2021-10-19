export const ADD_MOVIES = "ADD_MOVIES";
export const FAV_MOVIES = "FAV_MOVIES";
export const REMOVE_FROM_FAVOURITES = "REMOVE _FROM_FAVOURITES";
export const SET_FAV = "SET_FAV";
export const SEARCH_MOVIE = "SEARCH_MOVIE";

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

export function setFav(val) {
  return {
    type: SET_FAV,
    val,
  };
}

export function searchMovie(movie) {
  return {
    type: SEARCH_MOVIE,
    movie,
  };
}
