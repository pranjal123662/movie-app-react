import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { data } from "../data";
import { addMovies } from "../actions";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loadingForMovie: false,
      loadingForFavourite: false,
    };
  }
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));
  }
  handleMovie = () => {
    this.setState({
      loadingForMovie: true,
      loadingForFavourite: false,
    });
  };
  handleMovieFav = () => {
    this.setState({
      loadingForMovie: false,
      loadingForFavourite: true,
    });
  };
  render() {
    // const movies = this.props.store.getState();
    const { list } = this.props.store.getState();
    const { favourite } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab" onClick={this.handleMovie}>
              Movies
            </div>
            <div className="tab" onClick={this.handleMovieFav}>
              Favourites
            </div>
          </div>
          {!this.state.loadingForFavourite && (
            <div className="list">
              {list.map((movie, index) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={`movie${index}`}
                    dispatch={this.props.store.dispatch}
                  />
                );
              })}
            </div>
          )}
          {this.state.loadingForFavourite && (
            <div className="list">
              {favourite.map((movie, index) => {
                return (
                  <MovieCard
                    movie={movie}
                    key={`movie${index}`}
                    dispatch={this.props.store.dispatch}
                  />
                );
              })}
            </div>
          )}
        </div>
        {/* {!this.state.loadingForFavourite }
          <div className="list">
            {list.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movie${index}`}
                  dispatch={this.props.store.dispatch}
                />
              );
            })} */}
      </div>
    );
  }
}

export default App;
