import React, { Component } from "react";

class SearchPanel extends Component {
  state = {
    searchText: ""
  };

  updateSearch = e => {
    const text = e.target.value;
    console.log(text);
    // this.setState({
    //   searchText: text
    // });
    this.props.updateSearch(text);
  };

  updateFilter = e => {
    const text = e.target.textContent;
    this.props.updateFilter(text);
    e.target.classList.toggle("active");
  };

  render() {
    return (
      <div className="search">
        <div className="search-input-field">
          <span>Looking for</span>
          <input
            type="text"
            placeholder="start typing here..."
            onInput={this.updateSearch}
          />
        </div>
        <div className="search-filters">
          <span>Or filter</span>
          <button onClick={this.updateFilter}>Brazil</button>
          <button onClick={this.updateFilter}>Kenya</button>
          <button onClick={this.updateFilter}>Columbia</button>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
