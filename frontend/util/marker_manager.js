class MarkerManager {
  constructor(map, handleClick) {
    this.map = map;
    this.markers = {};
    this.handleClick = handleClick;
  }

  createMarkerFromCamp(camp) {
    const position = new google.maps.LatLng(camp.latitude, camp.longitude);
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      campId: camp.id,
      icon: "smallpin.png"
    });

    marker.addListener('click', () => this.handleClick(camp));
    this.markers[marker.campId] = marker;
  }

  updateMarkers(camps) {
    const campsObj = {};
    camps.forEach(camp => campsObj[camp.id] = camp);

    camps
      .filter(camp => !this.markers[camp.id])
      .forEach(newcamp => this.createMarkerFromCamp(newcamp, this.handleClick))

    Object.keys(this.markers)
      .filter(campId => !campsObj[campId])
      .forEach((campId) => this.removeMarker(this.markers[campId]))
  }
}

export default MarkerManager;
