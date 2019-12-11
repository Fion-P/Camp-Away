import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { setTimeout } from "timers";
import { withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
    if (this.props.location.pathname.slice(0, 6) === "/users") {
      
    }
    let input = document.getElementById("search-text");
    let autocomplete = new google.maps.places.Autocomplete(input);

    let address;

    let that = this;
    autocomplete.addListener("place_changed", () => {
      if (!autocomplete.getPlace().formatted_address) {
        address = autocomplete.getPlace().name;
        that.setState({ address: address });
        that.handleSubmit();
      } else {
        address = autocomplete.getPlace().formatted_address;
        that.setState({ address: address });
        that.handleSubmit();
      }
    });
  }

  // componentDidUpdate(oldProps) {
  //   if (oldProps.location.pathname !== this.props.location.pathname) {
  //     this.setState({address: ""});
  //   }
  // }

  handleInput() {
    return e => {
      this.setState({ address: e.target.value });
    };
  }

  handleSubmit() {
    // e.preventDefault();
    let address = this.state.address;
    //initiate lat and lng
    let lat;
    let lng;

    // Create new Geocoder to convert address into lat/lng
    let location = new google.maps.Geocoder();
    location.geocode({ address: address}, (res, status) => {
      if (status === "OK") {
        lat = res[0].geometry.location.lat();
        lng = res[0].geometry.location.lng();
        this.props.history.push(`/camps?lat=${lat}&lng=${lng}`)
        ;
      } else {
        lat = 37.8887;
        lng = -122.342;
        this.props.history.push(`/camps?lat=${lat}&lng=${lng}`);
      }
    });
  }

  render() {
    return (
      <div className="nav-search">
        <div className="nav-search-area">
          <div className="nav-search-bar">
            <FontAwesomeIcon icon={faSearch} className="icon4" />
            <input
              id="search-text"
              // className="search-text"
              type="search"
              placeholder="Find camping near..."
              onChange={this.handleInput}
              // value={this.state.address}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchBar);
