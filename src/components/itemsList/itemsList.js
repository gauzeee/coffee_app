import React, { Component } from "react";
import GetService from "../../services/getService";
import Spinner from "../spinner";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage";

class ItemsList extends Component {
  state = {
    items: [],
    loading: true,
    error: false,
    errorData: null
  };

  getServ = new GetService();

  onError(error) {
    this.setState({
      error: true,
      errorData: error
    });
  }

  componentDidMount() {
    const { url } = this.props;
    this.getServ
      .getAllItems(url)
      .then(data => {
        setTimeout(() => {
          this.setState({ items: data, loading: false });
        }, 1000);
      })
      .catch(error => {
        this.onError(error);
      });
  }

  renderItems(arr) {
    const { linkable } = this.props;
    return arr.map(item => {
      const { id, name, url, price, country } = item;
      const location = country ? <p className="country">{country}</p> : null;
      if (linkable) {
        return (
          <Link
            to={{
              pathname: `/coffee/${id}`,
              state: {
                item: item
              }
            }}
            className="item-card"
            key={id}
          >
            <img src={url} alt="" />
            <p>{name}</p>
            {location}
            <p className="price">{price}</p>
          </Link>
        );
      } else {
        return (
          <div className="item-card" key={id}>
            <img src={url} alt="" />
            <p>{name}</p>
            {location}
            <p className="price">{price}</p>
          </div>
        );
      }
    });
  }

  render() {
    if (this.state.error) return <ErrorMessage error={this.state.errorData} />;
    const { loading, items } = this.state;

    if (loading) return <Spinner />;

    const Items = this.renderItems(items);

    return <div className="list-items">{Items}</div>;
  }
}

export default ItemsList;
