import React, { Component } from "react";
import Separator from "../separator";
import ErrorMessage from "../errorMessage";

class aboutBlock extends Component {
  state = {
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) return <ErrorMessage />;
    const { image, title, text, hr } = this.props;
    const subClass = image ? "image" : "no-image";
    const Image = ({ image }) => {
      return (
        <div className="about-image">
          <img src={image} alt="" />
        </div>
      );
    };

    const Hr = () => {
      return hr ? <hr className="about-hr" /> : null;
    };

    const LSide = image ? <Image image={image} /> : null;

    return (
      <>
        <div className="about">
          {LSide}
          <div className={`about-content ${subClass}`}>
            <h3 className="about-title">{title}</h3>
            <Separator light="black" />
            <p className="about-text">{text}</p>
          </div>
        </div>
        <Hr />
      </>
    );
  }
}

export default aboutBlock;
