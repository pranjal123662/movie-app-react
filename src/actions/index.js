export const ADD_MOVIES = "ADD_MOVIES";
export const FAV_MOVIES = "FAV_MOVIES";
export const REMOVE_FROM_FAVOURITES = "REMOVE _FROM_FAVOURITES";
export const SET_FAV = "SET_FAV";
// export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";

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

export function addMovieToList(movie) {
  return {
    type: ADD_MOVIE_TO_LIST,
    movie,
  };
}

export function handleMovieSearch(movie) {
  return function (dispatch) {
    const url = `https://www.omdbapi.com/?apikey=d3e003cf&t=${movie}`;
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log(movie);
        dispatch(searchMovie(movie));
      });
  };
}

export function searchMovie(movie) {
  return {
    type: ADD_SEARCH_RESULT,
    movie,
  };
}
