import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToiletPaper, faFire } from "@fortawesome/free-solid-svg-icons";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faFireAlt } from "@fortawesome/free-solid-svg-icons";



export class CampEssentials extends React.Component {

  render () {
    let { camp } = this.props;
    let toilet;
    let pets;
    let campfires;
    if (camp.toilet === true) {
      toilet = (
        <h1 className="available">
          <FontAwesomeIcon icon={faToiletPaper} className="toilet-paper" /> 
          Toilet available
        </h1>
      )
    } else {
      toilet = (
        <h1 className="not-available">
          <FontAwesomeIcon icon={faToiletPaper} className="toilet-paper" /> 
          No toilets
        </h1>
      )
    }

    if (camp.pets === true) {
      pets = (
        <h1 className="available">
          <FontAwesomeIcon icon={faDog} className="dog" />
          Pets allowed
        </h1>
      )
    } else {
      pets = (
        <h1 className="not-available">
          <FontAwesomeIcon icon={faDog} className="dog" />
          No pets allowed
        </h1>
      )
    }

    if (camp.campfires === true) {
      campfires = (
        <h1 className="available">
          <FontAwesomeIcon icon={faFire} className="fire" /> 
          Campfires allowed
        </h1>
      )
    } else {
      campfires = (
        <h1 className="not-available">
          <FontAwesomeIcon icon={faFire} className="fire" /> 
          No campfires
        </h1>
      )
    }

    return (
      <div className="camp-essentials">
        {toilet}
        {pets}
        {campfires}
      </div>
    )
  }
}

export default CampEssentials;