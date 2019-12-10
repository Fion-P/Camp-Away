import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setTimeout } from "timers";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <div className="search-area">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="icon4" />
            <input
              className="search-text"
              type="search"
              placeholder="Find camping near..."
            />
          </div>
          <span className="search-button-cont">
            <button className="search-button">Search</button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar