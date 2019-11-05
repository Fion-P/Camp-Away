import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


class HomePage extends React.Component {

  render() {
    return (
      <div className="home-page">
        <div className="page-top">
          <div className="top-left">
            <h1>Find yourself outside.</h1>
            <h2>Book unique camping experiences on over 300,000</h2>
            <h2>campsites, cabins, RV parks, public parks and more.</h2>
          </div>
          <div className="top-right">
            <img src="/image.jpg" />
          </div>
        </div>
        <div className="search">
          <div className="search-area">
            <div className="search-bar">
              <FontAwesomeIcon icon={faSearch} className="icon4" />
              <input class="search-text" type="search" placeholder="Find camping near..." />
            </div>
            <span className="search-button-cont">
              <button className="search-button" >Search</button>
            </span>
          </div>
        </div>
      </div>
    )
  }

}

export default HomePage;