import React from 'react';
import { Link } from 'react-router-dom';


// Displays the info for each camp 
// only displays picture, name, location, and price per night
export default ({ camp }) => {
  return (
    <div className="eachCamp" id={camp.id}>
      <Link to={`/camps/${camp.id}`}>
        <li className="campIndexItem">
          <div className="index-photo">
            <img src={camp.photoUrls[0]} />
          </div>
          <div className="campNameLocation">
              <h3> {camp.camp_name} </h3>
              <h4> {camp.location} </h4>
          </div>
          <div className="campPrice">
            <h5> ${camp.price}/night </h5>
          </div>
          <br />
        </li>
      </Link>
    </div>
  );
}