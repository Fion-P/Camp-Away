import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setTimeout } from 'timers';
import CampIndexItem from '../camps/camp_index_item';
import SearchBar from '../search/search_bar';
import Prefooter from "../prefooter/prefooter";


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  // fetches the camps for the featured 
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCamps()
      .then(() => {
        this.setState( {loaded: true} );
      });
  }

  // renders the homepage
  // uses differnt components for search bar, camps, and footer
  render() {
    let camps = this.props.camps;
    if (!this.state.loaded) {
      return (
        <div>
        </div>
      )
    }
    let featured = [];
    for (let i = 5; i < 8; i ++) {
      featured.push(camps[i])
    }

    return (
      <div className="home-page">
        <div className="page-top">
          <div className="top-left">
              <h1>Find yourself outside.</h1>
            <h2>Book unique camping experiences on over <b>300,000</b></h2>
              <h2>campsites, cabins, RV parks, public parks and more.</h2>
          </div>
          <div className="top-right">
            <img src="/image.jpg" />
          </div>
        </div>
        <SearchBar />
        <div className="featured">
          <div className="featured-content">
            <h1>Featured Camps</h1>
            <div className="featured-camp">
              {featured.map(camp => (
                <CampIndexItem
                  camp={camp}
                  key={camp.id}
                />
              ))}
            </div>
          </div>
        </div>
        < Prefooter />
      </div>
    )
  }

}

export default HomePage;