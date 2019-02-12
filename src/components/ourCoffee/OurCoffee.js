import React, { Component } from "react";
import image from "../../images/girl-865304_1920.png";
import AboutBlock from "../aboutBlock";

class OurCoffee extends Component {
  render() {
    return (
      <>
        <div className="our">
          <h1 className="main-title">Our Coffee</h1>
        </div>
        <AboutBlock
          image={image}
          title="About Our Beans"
          text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face."
        />
        <hr className="about-hr" />
      </>
    );
  }
}

export default OurCoffee;
