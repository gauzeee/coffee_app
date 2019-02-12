import React, { Component } from "react";
import GetService from "../../services/getService";
import Spinner from "../spinner";

class ItemsList extends Component {
  state = {
    items: [],
    loading: true,
    error: false
  };

  getServ = new GetService();

  componentDidMount() {
    const { url } = this.props;
    this.getServ.getAllItems(url).then(data => {
      setTimeout(() => {
        this.setState({ items: data, loading: false });
      }, 1000);
    });
  }

  renderItems(arr) {
    return arr.map(item => {
      const { id, name, url, price } = item;
      console.log(item);
      return (
        <div className="item-card" key={id}>
          <img src={url} alt="" />
          <p>{name}</p>
          <p>{price}</p>
        </div>
      );
    });
  }

  render() {
    const { loading, error, items } = this.state;

    if (loading) return <Spinner />;

    const Items = this.renderItems(items);

    return (
      <div>
        <h3>Our best</h3>
        {Items}
      </div>
    );
  }
}

export default ItemsList;
