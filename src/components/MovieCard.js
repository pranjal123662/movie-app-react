import React, { Component } from "react";
import { favMovies } from "../actions";
import { removefromfav } from "../actions";

class MovieCard extends Component {
  constructor() {
    super();
    this.state = {
      fav_mov: false,
    };
  }
  handleFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(favMovies(movie));
    this.setState({
      fav_mov: true,
    });
  };

  handleUnFavClick = () => {
    const { movie } = this.props;
    this.props.dispatch(removefromfav(movie));
    this.setState({
      fav_mov: false,
    });
  };

  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.Title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdRating}</div>
            {this.state.fav_mov === false && (
              <button onClick={this.handleFavClick} className="favourite-btn">
                Favourite
              </button>
            )}
            {this.state.fav_mov && (
              <button
                onClick={this.handleUnFavClick}
                className="unfavourite-btn "
              >
                Unfavourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
