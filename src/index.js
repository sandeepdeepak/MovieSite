import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavComponent from "./components/NavComponent/nav";
import MovieListComponent from "./components/MovieListComponent/movieList";
import { moviesList } from "./mock-data/moviesListMock";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    moviesList: moviesList,
    isAdmin: false,
  };

  onDelete = (i) => {
    console.log(i);
    let newMovieList = this.state.moviesList.filter(
      (movie, index) => index != i
    );
    this.setState({
      moviesList: newMovieList,
    });
  };

  onAddMovie = (movieName, movieImageUrl) => {
    let newMovieList = [...this.state.moviesList];
    newMovieList.push({
      movieName,
      movieImageUrl,
    });
    this.setState({
      moviesList: newMovieList,
    });

    console.log(moviesList);
  };

  changeIsAdmin = (value) => {
    console.log(value);
    this.setState({ isAdmin: value });
  };

  render() {
    return (
      <div>
        <NavComponent
          onAddMovie={this.onAddMovie}
          changeIsAdmin={this.changeIsAdmin}
          isAdmin={this.state.isAdmin}
        />
        <MovieListComponent
          moviesList={this.state.moviesList}
          onDelete={this.onDelete}
          isAdmin={this.state.isAdmin}
        />
      </div>
    );
  }
}

ReactDOM.render(<Project />, document.getElementById("root"));
