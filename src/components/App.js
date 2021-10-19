import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { data } from "../data";
import { addMovies } from "../actions";
import { setFav } from "../actions";

class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));
  }
  handleChangeTab = (status) => {
    this.props.store.dispatch(setFav(status));
  };
  render() {
    // const movies = this.props.store.getState();
    const { movies } = this.props.store.getState();
    console.log("Inside", movies);
    const { list } = movies;
    const { favourite } = movies;
    const { setFav } = movies;
    const display = setFav ? favourite : list;

    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div
              className="tab"
              onClick={() => {
                this.handleChangeTab(false);
              }}
            >
              Movies
            </div>
            <div
              className="tab"
              onClick={() => {
                this.handleChangeTab(true);
              }}
            >
              Favourites
            </div>
          </div>
          <div className="list">
            {display.map((movie, index) => {
              return (
                <MovieCard
                  movie={movie}
                  key={`movie${index}`}
                  dispatch={this.props.store.dispatch}
                />
              );
            })}
          </div>
          {display.length === 0 && <div>No movies in the favourites!</div>}
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
