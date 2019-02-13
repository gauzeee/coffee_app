import React, { Component } from "react";
import Separator from "../separator";
import Spinner from "../spinner";
import ErrorMessage from "../errorMessage";

class ItemDetails extends Component {
  state = {
    item: null,
    loading: true,
    error: false
  };

  componentDidMount() {
    const { item } = this.props.location.state;
    this.setState({
      item,
      loading: false
    });
  }

  componentDidCatch() {
    this.setState({
      error: true
    });
  }

  render() {
    if (this.state.error) return <ErrorMessage />;
    const { loading } = this.state;
    if (loading) return <Spinner />;
    let { url, name, country, desc, price } = this.state.item;

    country = country ? country : "We don`t know about it...";
    desc = desc ? desc : "Coming soon!";

    return (
      <div className="item-info">
        <div className="item-image">
          <img src={url} alt="" />
        </div>
        <div className="item-details">
          <h3>{name}</h3>
          <Separator light="black" />
          <p className="item-country">
            <span className="type">Country:</span>
            <span className="value">{country}</span>
          </p>
          <p className="item-desc">
            <span className="type">Description:</span>
            <span className="value">{desc}</span>
          </p>
          <p className="item-price">
            <span className="type">Price:</span>
            <span className="value">{price}</span>
          </p>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
