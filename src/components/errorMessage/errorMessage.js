import React, { Component } from "react";
import errorImg from "../../images/mug15-back.png";

class ErrorMessage extends Component {
  render() {
    const { error } = this.props;
    const message = error ? error.message : null;
    return (
      <div className="error">
        <h1>Sorry, but something went wrong...</h1>
        <span>{message}</span>
        <img src={errorImg} alt="" />
      </div>
    );
  }
}

export default ErrorMessage;
