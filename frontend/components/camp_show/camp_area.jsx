import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faParking } from "@fortawesome/free-solid-svg-icons";



class CampArea extends React.Component {

  render() {
    let {camp} = this.props;
    let lodging = camp.lodging_type;
    let lodge_sym;
    if (lodging === "Tents") {
      lodge_sym = ( 
        <span>
          <h1><FontAwesomeIcon icon={faCampground} className="tent" /> Tent</h1>
        </span>
      );
    } else if (lodging = "Cabin") {
      lodge_sym = (
        <span>
          <h1> <FontAwesomeIcon icon={faHome} className="cabin" />Cabin</h1>
        </span>
      );
    }
    return (
      <div className="camp-area">
        {lodge_sym}
        <h1>
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon6"/> 1 site
        </h1>
        <h1>
          <FontAwesomeIcon icon={faUser} className="icon6"/> Up to {camp.max_guests} guests per site
        </h1>
        <h1>
          <FontAwesomeIcon icon={faParking} className="icon6"/> Parking on site
        </h1>
      </div>
    );
  }
}

export default CampArea;