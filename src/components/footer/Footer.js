import React, { Component } from "react";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import InlineSVG from "svg-inline-react";
import seeds from "../../images/seeds.svg";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Link className="footer-link" exact to="/">
          <InlineSVG className="logo footer-logo" src={logo} /> Coffee house
        </Link>
        <Link className="footer-link" to="/coffee">
          Our Coffee
        </Link>
        <Link className="footer-link" to="/pleasure">
          For Your Pleasure
        </Link>
        <div className="footer-seeds-block">
          <hr />
          <InlineSVG className="footer__seeds" src={seeds} />
          <hr />
        </div>
      </footer>
    );
  }
}

export default Footer;
