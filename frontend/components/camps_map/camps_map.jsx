import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from "react-router-dom";

class CampsMap extends React.Component {
  componentDidMount() {
    const queryString = this.props.query;
    let lat;
    let lng;

    if (!queryString) {
      // default to SF
      lat = 37.7758;
      lng = -122.435;
    } else {
      // set to user search
      lat = parseFloat(queryString.split("=")[1].split("&")[0]);
      lng = parseFloat(queryString.split("=")[2]);
    }

    const mapOptions = {
      center: { lat: lat, lng: lng },
      zoom: 8
    };

    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let camps = this.props.camps;
    // for (let i = 0; i < camps.length; i++) {
    //   let LatLng = { lat: camps[i].latitude, lng: camps[i].longitude };
    //   let marker = new google.maps.Marker(
    //     {
    //       position: LatLng,
    //       map: this.map,
    //       animation: google.maps.Animation.DROP,
    //       title: camps[i].camp_name
    //     },
    //     this.handleMarkerClick.bind(this)
    //   );
    //   marker.setMap(this.map);
    // }
    this.MarkerManager = new MarkerManager(
      this.map,
      this.handleMarkerClick.bind(this)
    );
    this.MarkerManager.updateMarkers(this.props.camps);
  }

  handleMarkerClick(camp) {
    console.log(camp);
    this.props.history.push(`camps/${camp.id}`);
  }

  render() {
    // debugger;
    return <div id="map-container" ref={map => (this.mapNode = map)}></div>;
  }
}

export default withRouter(CampsMap);
