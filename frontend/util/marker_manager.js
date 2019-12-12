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
        `
          <a href="/#/camps/${camp.id}">
          <div class="infowindow">
              <img class="infowindow-image" src="${camp.photoUrls[0]}"/>
              <div class="infowindow-info">
                <div>
                  <h2 class="infowindow-camp-name"> ${camp.camp_name} </h2>
                  <h3 class="infowindow-location">${camp.location}</h3>
                </div>
                <div class="iw-price-container">
                  <h4 class="infowindow-price">$${camp.price}/night</h4>
                </div>
              </div>
              </div>
          </a>
        `,
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
      clicked: false
    });

    // marker.addListener('click', () => this.handleClick(camp));
    this.markers[marker.campId] = marker;
    // console.log(this.markers);

    marker.addListener('mouseover', () => {
      marker.infoWindow.open(this.map, marker);
    });

    marker.addListener('click', () => {
      marker.clicked = !marker.clicked;
      if (marker.clicked) {
        this.closeInfoWindows();
        marker.infoWindow.open(this.map, marker);
      } else {
        marker.infoWindow.close(this.map, marker);
      }
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
  
  closeInfoWindows() {
    Object.values(this.markers).forEach(marker => {
      marker.infoWindow.close(this.map, marker);
    });
  }
}

export default MarkerManager;
