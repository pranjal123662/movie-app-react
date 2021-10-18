import React from "react";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";

import { data } from "../data";
import addMovies from "../actions";
class App extends React.Component {
  componentDidMount() {
    this.props.store.subscribe(() => {
      this.forceUpdate();
    });
    this.props.store.dispatch(addMovies(data));
  }
  render() {
    // const movies = this.props.store.getState();
    const { list } = this.props.store.getState();
    return (
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
          <div className="list">
            {list.map((movie, index) => {
              return <MovieCard movie={movie} key={`movie${index}`} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
