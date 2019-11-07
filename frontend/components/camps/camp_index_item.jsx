import React from 'react';
import { Link } from 'react-router-dom';

export default ({ camp }) => {
  return (
    <div className="eachCamp">
      <Link to={`/camps/${camp.id}`}>
        <li className="campIndexItem">
          <div className="campNameLocation">
              <h3> {camp.camp_name} </h3>
              <h4> {camp.location} </h4>
          </div>
          <div className="campDescription">
            <h4> {camp.description}</h4>
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