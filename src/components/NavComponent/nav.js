import React, { Component, useContext, useState } from "react";
import "./nav.scss";
import ButtonComponent from "../ButtonComponent/button";
import Modal from "../ModalComponent/modal";
import { MovieContext } from "../../movieContext";

const NavComponent = (props) => {
  const [moviePd, setMoviePd] = useContext(MovieContext);
  const [show, setShow] = useState(false);
  const [movieName, setMovieName] = useState("");
  const [movieImgUrl, setMovieImgUrl] = useState("");

  const showModal = (e) => {
    setShow(!show);
    if (show) {
      onAddMovie(movieName, movieImgUrl);
    }
  };

  const onAddMovie = (movieName, movieImageUrl) => {
    let newMovieList = [...moviePd.moviesList];
    newMovieList.push({
      movieName,
      movieImageUrl,
    });
    setMoviePd({ ...moviePd, moviesList: newMovieList });
  };

  const updateMovieNameInput = (event) => {
    setMovieName(event.target.value);
  };

  const updateMovieImgUrlInput = (event) => {
    setMovieImgUrl(event.target.value);
  };

  const changeIsAdmin = (value) => {
    console.log(value);
    setMoviePd({ ...moviePd, isAdmin: value });
    console.log(moviePd);
  };

  return (
    <div className="nav">
      <div className="nav-image">
        <img
          className="logo"
          src="https://popcorntime.watch/templates/cartoonhd/assets/images/logo.png"
        ></img>
      </div>
      <div className="nav-remaining">
        <ButtonComponent
          bgColor="black"
          color="white"
          height="2rem"
          width="5rem"
          buttonText="Admin"
          borderColor="#4fb5f5"
          isFocused={moviePd.isAdmin}
          onClick={() => changeIsAdmin(true)}
        />
        <ButtonComponent
          bgColor="black"
          color="white"
          height="2rem"
          width="5rem"
          buttonText="User"
          borderColor="#4fb5f5"
          isFocused={!moviePd.isAdmin}
          onClick={() => changeIsAdmin(false)}
        />
        {moviePd.isAdmin && (
          <div className="App">
            <ButtonComponent
              className="add-button"
              bgColor="white"
              color="black"
              height="2.5rem"
              width="7rem"
              buttonText="Add Movie"
              borderColor="white"
              onClick={showModal}
            />

            <Modal onClose={showModal} show={show} title="Add Movie">
              <h4>Movie name : </h4>
              <input type="text" onChange={updateMovieNameInput}></input>

              <h4>Movie Img Url : </h4>
              <input type="text" onChange={updateMovieImgUrlInput}></input>
            </Modal>
          </div>
        )}
      </div>
    </div>
  );
};
export default NavComponent;
