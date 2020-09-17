import React, { Component } from "react";
import "./movieList.scss";

import ButtonComponent from "../ButtonComponent/button";
import MovieComponent from "../MovieComponent/movie";

class MovieListComponent extends Component {
  constructor(props) {
    super(props);
  }
  onDelete = (i) => {
    this.props.onDelete(i);
  };
  render() {
    return (
      <div className="movieList">
        {this.props.moviesList.map((e, i) => {
          return (
            <div key={i}>
              <MovieComponent
                key={i}
                movieName={e.movieName}
                imgSrc={e.movieImageUrl}
                onDelete={() => this.onDelete(i)}
              />
              {this.props.isAdmin && (
                <div>
                  <ButtonComponent
                    bgColor="black"
                    color="#FF6463"
                    height="2rem"
                    width="8rem"
                    buttonText="Delete Movie"
                    borderColor="#FF6463"
                    onClick={(e) => {
                      this.props.onDelete(i);
                    }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
export default MovieListComponent;
