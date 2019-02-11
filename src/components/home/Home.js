import React, { Component } from "react";
import InlineSVG from "svg-inline-react";
import seeds from "../../images/seeds.svg";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="main">
        <h1 className="main__title">Everything You Love About Coffee</h1>
        <div className="seeds-block">
          <hr />
          <InlineSVG className="main__seeds" src={seeds} />
          <hr />
        </div>
        <h3 className="main__subtitle">
          We makes every day full of energy and taste
        </h3>
        <h3 className="main__subtitle">Want to try our beans?</h3>
        <Link to="/coffee" className="main__btn">
          More
        </Link>
      </div>
    );
  }
}

export default Home;
