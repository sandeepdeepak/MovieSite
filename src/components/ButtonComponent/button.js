import React, { Component, createRef } from "react";
import "./button.scss";

class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = createRef();
  }

  toggleHover = () => {
    console.log(this.buttonRef);
    this.buttonRef.current.background = this.props.borderColor;
  };

  render() {
    return (
      <button
        ref={this.buttonRef}
        className="primary-style"
        style={{
          background: this.props.isFocused
            ? this.props.borderColor
            : this.props.bgColor,
          color: this.props.color,
          width: this.props.width,
          height: this.props.height,
          border: `2px solid ${this.props.borderColor}`,
        }}
        onClick={(e) => {
          this.props.onClick(e);
        }}
        onMouseOver={this.toggleHover}
      >
        {this.props.buttonText}
      </button>
    );
  }
}
export default ButtonComponent;
