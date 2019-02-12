import React, { Component } from "react";
import Separator from "../separator";

class aboutBlock extends Component {
  render() {
    const { image, title, text } = this.props;
    const subClass = image ? "image" : "no-image";
    const Image = ({ image }) => {
      return (
        <div className="about-image">
          <img src={image} alt="" />
        </div>
      );
    };

    const LSide = image ? <Image image={image} /> : null;

    return (
      <div className="about">
        {LSide}
        <div className={`about-content ${subClass}`}>
          <h3 className="about-title">{title}</h3>
          <Separator light="black" />
          <p className="about-text">{text}</p>
        </div>
      </div>
    );
  }
}

export default aboutBlock;
