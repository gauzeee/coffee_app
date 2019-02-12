import React, { Component } from "react";
import preloader from "../../images/loader.gif";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner">
        <img src={preloader} alt="" />
      </div>
    );
  }
}

export default Spinner;
