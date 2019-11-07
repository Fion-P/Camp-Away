import React from 'react';

export default ({ camp }) => {
  return (
    <div className="eachCamp">
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
    </div>
  );
}