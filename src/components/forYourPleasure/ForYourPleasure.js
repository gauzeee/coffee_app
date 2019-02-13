import React, { Component } from "react";
import AboutBlock from "../aboutBlock";
import image from "../../images/coffee-839233_1920.png";
import ItemsList from "../itemsList";
import ErrorMessage from "../errorMessage";

class ForYourPleasure extends Component {
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
    return (
      <>
        <div className="pleasure">
          <h1 className="main-title">For Your Pleasure</h1>
        </div>
        <AboutBlock
          image={image}
          title="About our goods"
          text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face."
          hr
        />
        <div className="coffee-list">
          <ItemsList url="goods" />
        </div>
      </>
    );
  }
}

export default ForYourPleasure;
