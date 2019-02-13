import React, { Component } from "react";

class SearchPanel extends Component {
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
          <button>Brazil</button>
          <button>Kenya</button>
          <button>Columbia</button>
        </div>
      </div>
    );
  }
}

export default SearchPanel;
