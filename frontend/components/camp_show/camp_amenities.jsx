import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWater } from "@fortawesome/free-solid-svg-icons";
import { faShower } from "@fortawesome/free-solid-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const CampAmenities = ({camp}) => {

  let water;
  if (camp.portable_water === true) {
    water = (
      <h1 className="available">
        <FontAwesomeIcon icon={faWater} className="water" /> 
        Portable water available
      </h1>
    )
  } else {
    water = (
      <h1 className="not-available">
        <FontAwesomeIcon icon={faWater} className="water" />
        No portable water available
      </h1>
    )
  }

  let showers;
  if (camp.showers===true) {
    showers = (
      <h1 className="available">
        <FontAwesomeIcon icon={faShower} className="shower" />
        Showers available
      </h1>
    )
  } else {
    showers = (
      <h1 className="not-available">
        <FontAwesomeIcon icon={faShower} className="shower" />
        No showers available
      </h1>
    )
  }

  let wifi;
  if (camp.wifi === true) {
    wifi = (
      <h1 className="available">
        <FontAwesomeIcon icon={faWifi} className="wifi" />
        Wifi available
      </h1>
    )
  } else {
    wifi = (
      <h1 className="not-available">
        <FontAwesomeIcon icon={faWifi} className="wifi" />
        No wifi available
      </h1>
    )
  }

  let kitchen;
  if (camp.kitchen === true) {
    kitchen = (
      <h1 className="available">
        <FontAwesomeIcon icon={faUtensils} className="kitchen" />
        Kitchen available
      </h1>
    )
  } else {
    kitchen = (
      <h1 className="not-available">
        <FontAwesomeIcon icon={faUtensils} className="kitchen" />
        No kitchen available
      </h1>
    )
  }

  let picnic; 
  if (camp.picnic === true) {
    picnic = (
      <h1 className="available">
        <FontAwesomeIcon icon={faShoppingBasket} className="picnic" />
        Picnic tables available
      </h1>
    )
  } else {
    picnic = (
      <h1 className="not-available">
        <FontAwesomeIcon icon={faShoppingBasket} className="picnic" />
        No picnic tabeles available
      </h1>
    )
  }
  let trash;

  return (
    <div className="camp-amenities">
      { water }
      { showers }
      { wifi }
      { kitchen }
      { picnic } 
      { trash }
    </div>
  )
}

