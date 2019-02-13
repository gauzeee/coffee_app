import React, { Component } from "react";
import errorImg from "../../images/mug15-back.png";

class ErrorMessage extends Component {
  render() {
    const { error } = this.props;
    return (
      <div className="error">
        <h1>Sorry, but something went wrong...</h1>
        <span>{error.message}</span>
        <img src={errorImg} alt="" />
      </div>
    );
  }
}

export default ErrorMessage;
