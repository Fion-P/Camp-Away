import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from "react-router-dom";

class CampsMap extends React.Component {

  // generate map
  componentDidMount() {
    this.props.fetchCamps()
      .then(() => {
        this.createMap();
      });
  }

  // update map if query string is different
  componentDidUpdate(oldProps) {
    if (oldProps.location.search !== this.props.location.search) {
      this.props.fetchCamps()
        .then(() => {
          this.createMap();
        });
    }
  }


  //generate map with markers
  createMap() {
    const queryString = this.props.location.search;
    let lat;
    let lng;

    if (!queryString) {
      // default to SF
      lat = 37.8887;
      lng = -122.342;
    } else {
      // set to user search
      lat = parseFloat(queryString.split("=")[1].split("&")[0]);
      lng = parseFloat(queryString.split("=")[2]);
    }

    // set the map locale and zoom
    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 7
    };

    // create map and markers
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.MarkerManager.updateMarkers(this.props.camps);
  }

  // allow users to click on marker and go to camp
  handleMarkerClick(camp) {
    this.props.history.push(`camps/${camp.id}`);
  }

  render() {
    return <div id="map-container" ref={map => (this.mapNode = map)}></div>;
  }
}

export default withRouter(CampsMap);
