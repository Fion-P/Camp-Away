import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { setTimeout } from "timers";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    let input = document.getElementById("search-text");
    let autocomplete = new google.maps.places.Autocomplete(input);

    let address;

    let that = this;
    autocomplete.addListener("place_changed", () => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        that.setState({ address: address });
        // that.handleSubmit();
      } else {
        address = autocomplete.getPlace().formatted_address;
        that.setState({ address: address });
        // that.handleSubmit();
      }
    });
  }

  handleInput() {
    return (e) => {
      this.setState({ address: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    //initiate lat and lng 
    let lat;
    let lng;

    // Create new Geocoder to convert address into lat/lng
    let location = new google.maps.Geocoder();
    console.log(this.state)
    location.geocode({"address": this.state.address}, (res, status) => {
      // debugger;
      console.log(status);
      if (status === "OK") {
        lat = res[0].geometry.location.lat();
        lng = res[0].geometry.location.lng();
        console.log(lat);
        console.log(lng);
      }
    });
  }

  render() {
    return (
      <div className="search">
        <div className="search-area">
          <div className="search-bar">
            <FontAwesomeIcon icon={faSearch} className="icon4" />
            <input
              id="search-text"
              // className="search-text"
              type="search"
              placeholder="Find camping near..."
              onChange={this.handleInput}
            />
          </div>
          <span className="search-button-cont">
            <button className="search-button" onClick={this.handleSubmit}>Search</button>
          </span>
        </div>
      </div>
    );
  }
}

export default SearchBar