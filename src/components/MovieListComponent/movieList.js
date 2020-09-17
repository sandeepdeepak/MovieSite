import React, { Component, useContext } from "react";
import "./movieList.scss";

import MovieComponent from "../MovieComponent/movie";
import { MovieContext } from "../../movieContext";

const MovieListComponent = (props) => {
  const [moviePd, setMoviePd] = useContext(MovieContext);

  return (
    <div className="movieList">
      {moviePd.moviesList.map((e, i) => {
        return (
          <div key={i}>
            <MovieComponent
              key={i}
              movieName={e.movieName}
              imgSrc={e.movieImageUrl}
              index={i}
            />
          </div>
        );
      })}
    </div>
  );
};
export default MovieListComponent;
