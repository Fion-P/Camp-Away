import { Link } from 'react-router-dom';

class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  createMarkerFromCamp(camp) {

    const markerInfoWindow = new google.maps.InfoWindow({
      content:
        `<div class="infowindow">
          <img class="infowindow-image" src="${camp.photoUrls[0]}"/>
          <div>
            <h2 class="infowindow-title"> ${camp.name} </h2>
            <p>${camp.location}</p>
            <p>$${camp.price}/night</p>
            </div>
        </div>`,
      maxWidth: 250,
    });

    const position = new google.maps.LatLng(camp.latitude, camp.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      campId: camp.id,
      icon: "smallpin.png",
      title: camp.name,
      infoWindow: markerInfoWindow,
      // clicked: false
    });

    marker.addListener('click', () => this.handleClick(camp));
    this.markers[marker.campId] = marker;
    // console.log(this.markers);

    marker.addListener('mouseover', () => {
      marker.infoWindow.open(this.map, marker);
    });

    marker.addListener('mouseout', () => {
      if (!marker.clicked) marker.infoWindow.close(this.map, marker);
    });

  }

  updateMarkers(camps) {
    const campsObj = {};
    camps.forEach(camp => campsObj[camp.id] = camp);

    camps
      .filter(camp => !this.markers[camp.id])
      .forEach(newcamp => this.createMarkerFromCamp(newcamp, this.handleClick))

    Object.keys(this.markers)
      .filter(campId => !campsObj[campId])
      .forEach((campId) => this.removeMarker(this.markers[campId]));
    
  }
  
}

export default MarkerManager;
