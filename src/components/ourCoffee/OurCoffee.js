import React, { Component } from "react";
import image from "../../images/girl-865304_1920.png";
import AboutBlock from "../aboutBlock";
import ItemDetails from "../itemDetails";
import { Switch, Route } from "react-router-dom";
import ItemsList from "../itemsList";
import ErrorMessage from "../errorMessage";

const CoffeeSwitch = () => (
  <Switch>
    <Route
      exact
      path="/coffee"
      component={props => (
        <AboutBlock
          image={image}
          title="About Our Beans"
          text="Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

Afraid at highly months do things on at. Situation recommend objection do intention
so questions. 
As greatly removed calling pleased improve an. Last ask him cold feel
met spot shy want. Children me laughing we prospect answered followed. At it went
is song that held help face."
          hr
        />
      )}
    />
    <Route path="/coffee/:id" component={ItemDetails} />
  </Switch>
);

class OurCoffee extends Component {
  state = {
    error: false
  };

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  checkLocation() {
    const location = window.location.pathname;
    return location.split("/").reverse()[0] === "coffee";
  }

  render() {
    if (this.state.error) return <ErrorMessage />;

    const List = () => {
      if (this.checkLocation()) {
        return (
          <>
            <div className="coffee-list">
              <ItemsList url="coffee" linkable search />
            </div>
          </>
        );
      } else {
        return null;
      }
    };

    return (
      <>
        <div className="our">
          <h1 className="main-title">Our Coffee</h1>
        </div>
        <CoffeeSwitch />
        <List />
      </>
    );
  }
}

export default OurCoffee;
