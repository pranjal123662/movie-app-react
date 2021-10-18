import React, { Component } from "react";

class MovieCard extends Component {
  handleClick = () => {
    this.props.dispatch(add);
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
            <button onClick={this.handleClick} className="favourite-btn">
              Favourite
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieCard;
