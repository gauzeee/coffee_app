import React, { Component } from "react";
import GetService from "../../services/getService";
import Spinner from "../spinner";
import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage";
import SearchPanel from "../searchPanel";

class ItemsList extends Component {
  state = {
    items: [],
    loading: true,
    error: false,
    errorData: null,
    searchText: "",
    filters: []
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
        }, 300);
      })
      .catch(error => {
        this.onError(error);
      });
  }

  updateFilter = text => {
    const { filters } = this.state;
    if (!filters.includes(text)) {
      filters.push(text);
    } else {
      const i = filters.indexOf(text);
      filters.splice(i, 1);
    }
    this.setState({
      filters
    });
  };

  updateSearch = searchText => {
    this.setState({
      searchText
    });
  };

  filterItems(items, filters) {
    if (filters.length === 0) return items;

    const filteredItems = [];

    filters.forEach(filter => {
      items.forEach(item => {
        if (item.country === filter) filteredItems.push(item);
      });
    });
    return filteredItems;
  }

  searchItem(items, searchText) {
    if (searchText === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
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
    const { loading, items, searchText, filters } = this.state;
    const { search } = this.props;

    if (loading) return <Spinner />;

    const Items = this.renderItems(items);

    const filtered = this.filterItems(items, filters);

    const searched = this.searchItem(filtered, searchText);

    const searchedItems = this.renderItems(searched);

    if (!search) return <div className="list-items">{Items}</div>;

    return (
      <>
        <SearchPanel
          updateSearch={this.updateSearch}
          updateFilter={this.updateFilter}
        />
        <div className="list-items">{searchedItems}</div>
      </>
    );
  }
}

export default ItemsList;
