import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setTimeout } from 'timers';
import CampIndexItem from '../camps/camp_index_item';


class HomePage extends React.Component {

  constructor(props) {
    super(props);
    // this.divName = "hidden";
    // this.state = {
    //   shown: false
    // };
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCamps()
      .then(() => {
        this.setState( {loaded: true} );
      });
  }

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
    // console.log(featured);
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
              <input className="search-text" type="search" placeholder="Find camping near..." />
            </div>
            <span className="search-button-cont">
              <button className="search-button" >Search</button>
            </span>
          </div>
        </div>
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
      </div>
    )
  }

}

export default HomePage;