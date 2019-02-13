import React, { Component } from "react";
import { Link } from "react-router-dom";
import Separator from "../separator";
import AboutBlock from "../aboutBlock";
import ItemsList from "../itemsList";
import ErrorMessage from "../errorMessage";

class Home extends Component {
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
        <div className="main">
          <h1 className="main-title">Everything You Love About Coffee</h1>
          <Separator light="white" />
          <h3 className="main__subtitle">
            We makes every day full of energy and taste
          </h3>
          <h3 className="main__subtitle">Want to try our beans?</h3>
          <Link to="/coffee" className="main__btn">
            More
          </Link>
        </div>
        <AboutBlock
          title="About Us"
          text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
Afraid at highly months do things on at. Situation recommend objection do intention
so questions. As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face.

Now residence dashwoods she excellent you. Shade being under his bed her, Much
read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
horrible but confined day end marriage. Eagerness furniture set preserved far
recommend. Did even but nor are most gave hope. Secure active living depend son
repair day ladies now."
          image=""
        />
        <div className="our-best-block">
          <h3>Our best</h3>
          <ItemsList className="main__list" url="bestsellers" linkable />
        </div>
      </>
    );
  }
}

export default Home;
