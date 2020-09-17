import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import NavComponent from "./components/NavComponent/nav";
import MovieListComponent from "./components/MovieListComponent/movieList";
import { moviesList } from "./mock-data/moviesListMock";
import { MovieProvider } from "./movieContext";

const Project = () => {
  return (
    <MovieProvider>
      <NavComponent />
      <MovieListComponent />
    </MovieProvider>
  );
};

ReactDOM.render(<Project />, document.getElementById("root"));
