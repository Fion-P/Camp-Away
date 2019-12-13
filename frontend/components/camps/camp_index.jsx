import React from 'react';
import CampIndexItem from './camp_index_item';

// General page for camps index
// shows the individual camp info through the CampIndexItem
class CampIndex extends React.Component {

  render() {
    let camps = this.props.camps;
    let results 
    if (camps.length > 0) {
      results = (
        <div className="campsIndex">
          {camps.map(camp => (
            <CampIndexItem
              camp={camp}
              key={camp.id}
            />
          ))}
        </div>
      ) 
    } else {
      results = (
        <div className="campsIndex">
          <h1>No camps found in this location</h1>
        </div>
      )
    }

    return (
      <div className="indexPage">
        <div className="camps">
          <div className="homeWords">
            <h1>The best camping near you! </h1>
            <h2>Pitch a tent in the big city or rough it in the challenging backcountry!</h2>
          </div>
          {results}
        </div>
      </div>
    )
  }
}

export default CampIndex;