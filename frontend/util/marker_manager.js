import { Link } from 'react-router-dom';

class MarkerManager {

  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  // creates the markers
  createMarkerFromCamp(camp) {

    // html for the info window
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

    // create markers with the position
    const position = new google.maps.LatLng(camp.latitude, camp.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      campId: camp.id,
      icon: "smallpin.png",
      title: camp.name,
      infoWindow: markerInfoWindow,
      animation: google.maps.Animation.DROP,
      clicked: false
    });

    this.markers[marker.campId] = marker;

    // bounces and opens the info window on hover
    marker.addListener('mouseover', () => {
      this.closeInfoWindows();
      marker.infoWindow.open(this.map, marker);
      marker.setAnimation(google.maps.Animation.BOUNCE);
    });

    // grab camp info box elemeent
    let campItem = document.getElementById(camp.id);
    let campBox = campItem;
    
    // Get infowindow to open when hovering on corresponding camp info
    campItem.addEventListener('mouseenter', (e) => {
      if (parseInt(campBox.id) === marker.campId) {
        marker.infoWindow.open(this.map, marker);
      }
    });
    // Close infowindows when mouse leaves the info box
    campItem.addEventListener('mouseleave', () => {
      this.closeInfoWindows();
    });

    // info window sticks in place if clicked on, 
    // exits out of other info windows
    marker.addListener('click', () => {
      marker.clicked = !marker.clicked;
      if (marker.clicked) {
        this.closeInfoWindows();
        marker.infoWindow.open(this.map, marker);
      } else {
        marker.infoWindow.close(this.map, marker);
      }
    });

    // if not clicked, exits out of info window and stops the bouncing
    marker.addListener('mouseout', () => {
      if (!marker.clicked) marker.infoWindow.close(this.map, marker);
      marker.setAnimation(null)
    });

  }

  // marker bounce function
  toggleBounce(marker) {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  // creates and deletes markers
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
  
  // function to close all info windows
  closeInfoWindows() {
    Object.values(this.markers).forEach(marker => {
      marker.infoWindow.close(this.map, marker);
    });
  }

  // removes the markers
  removeMarker(marker) {
    this.markers[marker.campId].setMap(null);
    delete this.markers[marker.campId];
  }
}

export default MarkerManager;
