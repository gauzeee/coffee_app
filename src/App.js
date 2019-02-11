import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import OurCoffee from "./components/ourCoffee";
import ForYourPleasure from "./components/forYourPleasure";

const Content = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/coffee" component={OurCoffee} />
      <Route path="/pleasure" component={ForYourPleasure} />
    </Switch>
  </>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
