import React from 'react';
import MarkerManager from '../../util/marker_manager';

class CampsMap extends React.Component {


  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 5
    };
    // console.log("working")
    // wrap this.mapNode in a Google Map
    // debugger
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    let camps = this.props.camps;
    for (let i = 0; i < camps.length ; i++) {
      let LatLng = { lat: camps[i].latitude, lng: camps[i].longitude};
      let marker = new google.maps.Marker({
        position: LatLng,
        map: this.map,
        title: camps[i].camp_name
      });
      marker.setMap(this.map);
    }
    // this.MarkerManager = new MarkerManager(this.map);
    // this.MarkerManager.updateMarkers(this.props.camps);
  }

  render() {
    // debugger;
    return (
      <div id='map-container' ref={map => this.mapNode = map}>
      </div>
    )
  }
}

export default CampsMap;
