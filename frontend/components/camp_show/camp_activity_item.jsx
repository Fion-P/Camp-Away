import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBicycle } from "@fortawesome/free-solid-svg-icons";
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faHiking } from "@fortawesome/free-solid-svg-icons";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faSwimmingPool } from "@fortawesome/free-solid-svg-icons";
import { faSwimmer } from "@fortawesome/free-solid-svg-icons";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

export const CampActivity = ({activity}) => {
  if (activity === "biking") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faBicycle} className="activity-icon"/>
        <h1>Biking</h1>
      </div>
    ) 
  } else if (activity === "hiking") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faHiking} className="activity-icon" />
        <h1>Hiking</h1>
      </div>
    )
  } else if (activity === "wildlife watching") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faCrow} className="activity-icon" />
        <h1>Wildlife Watching</h1>
      </div>
    ) 
  } else if (activity === "boating") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faShip} className="activity-icon" />
        <h1>Boating</h1>
      </div>
    )
  } else if (activity === "surfing") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faSwimmingPool} className="activity-icon" />
        <h1>Surfing</h1>
      </div>
    )
  } else if (activity === "swimming") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faSwimmer} className="activity-icon" />
        <h1>Swimming</h1>
      </div>
    )
  } else if (activity === "horseback riding") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faHorse} className="activity-icon" />
        <h1>Horseback Riding</h1>
      </div>
    )
  } else if (activity === "climbing") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faMountain} className="activity-icon" />
        <h1>Climbing</h1>
      </div>
    )
  } else if (activity === "ohv") {
    return (
      <div className="activity">
        <FontAwesomeIcon icon={faMotorcycle} className="activity-icon" />
        <h1>OHV</h1>
      </div>
    )
  } else {
    return null;
  }
}