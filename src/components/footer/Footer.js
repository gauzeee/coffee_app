import React, { Component } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import InlineSVG from "svg-inline-react";
import Separator from "../separator";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link className="footer-link" to="/">
          <InlineSVG className="logo footer-logo" src={logo} /> Coffee house
        </Link>
        <Link className="footer-link" to="/coffee">
          Our Coffee
        </Link>
        <Link className="footer-link" to="/pleasure">
          For Your Pleasure
        </Link>
        <Separator light="black" />
      </footer>
    );
  }
}

export default Footer;
