import React, { Component } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import InlineSVG from "svg-inline-react";

class Header extends Component {
  render() {
    return (
      <header>
        <Link className="header-link" to="/">
          <InlineSVG className="logo header-logo" src={logo} />
          Coffee house
        </Link>
        <Link className="header-link" to="/coffee">
          Our Coffee
        </Link>
        <Link className="header-link" to="/pleasure">
          For Your Pleasure
        </Link>
      </header>
    );
  }
}

export default Header;
