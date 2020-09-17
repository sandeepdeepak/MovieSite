import React, { Component } from "react";
import "./movie.scss";

class MovieComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="movie">
        <img className="movie-image" src={this.props.imgSrc}></img>
        <h4 className="movie-name">{this.props.movieName}</h4>
      </div>
    );
  }
}
export default MovieComponent;
