import React, { Component } from "react";
import "./nav.scss";
import ButtonComponent from "../ButtonComponent/button";
import Modal from "../ModalComponent/modal";

class NavComponent extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    show: false,
    movieName: "",
    movieImgUrl: "",
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
    if (this.state.show) {
      this.props.onAddMovie(this.state.movieName, this.state.movieImgUrl);
    }
  };

  updateMovieNameInput = (event) => {
    this.setState({ movieName: event.target.value });
  };

  updateMovieImgUrlInput = (event) => {
    this.setState({ movieImgUrl: event.target.value });
  };

  render() {
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
            isFocused={this.props.isAdmin}
            onClick={(e) => {
              this.props.changeIsAdmin(true);
            }}
          />
          <ButtonComponent
            bgColor="black"
            color="white"
            height="2rem"
            width="5rem"
            buttonText="User"
            borderColor="#4fb5f5"
            isFocused={!this.props.isAdmin}
            onClick={(e) => {
              this.props.changeIsAdmin(false);
            }}
          />
          {this.props.isAdmin && (
            <div className="App">
              <ButtonComponent
                className="add-button"
                bgColor="white"
                color="black"
                height="2.5rem"
                width="7rem"
                buttonText="Add Movie"
                borderColor="white"
                onClick={(e) => {
                  this.showModal(e);
                }}
              />

              <Modal
                onClose={this.showModal}
                show={this.state.show}
                title="Add Movie"
              >
                <h4>Movie name : </h4>
                <input type="text" onChange={this.updateMovieNameInput}></input>

                <h4>Movie Img Url : </h4>
                <input
                  type="text"
                  onChange={this.updateMovieImgUrlInput}
                ></input>
              </Modal>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default NavComponent;
