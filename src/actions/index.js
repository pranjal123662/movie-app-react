export const ADD_MOVIES = "ADD_MOVIES";
export const FAV_MOVIES="FAV_MOVIES";

export default function addMovies(movies) {
  return {
    type: ADD_MOVIES,
    movies,
  };
}

export default function favmovies(movies){
    return{
        type:FAV_MOVIES,
        movies,
    }
}
