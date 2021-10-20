import React, { Component } from "react";
import { addMovieToList, handleMovieSearch } from "../actions";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    console.log(movie);
    this.props.dispatch(addMovieToList(movie));
    this.setState({
      showSearchResults: false,
    });
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };
  handleSearch = () => {
    this.props.dispatch(handleMovieSearch(this.state.searchText));
  };
  render() {
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button id="search-btn" onClick={this.handleSearch}>
            Search
          </button>
          {this.props.showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={this.props.result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{this.props.result.Title}</span>
                  <button
                    onClick={() => this.handleAddToMovies(this.props.result)}
                  >
                    Add To Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
