import React from 'react';
import CampIndexItem from './camp_index_item';

// General page for camps index
// shows the individual camp info through the CampIndexItem
class CampIndex extends React.Component {

  render() {
    let camps = this.props.camps;
    return (
      <div className="indexPage">
        <div className="camps">
          <div className="homeWords">
            <h1>The best camping near you! </h1>
            <h2>Pitch a tent in the big city or rough it in the challenging backcountry!</h2>
          </div>
          <div className="campsIndex">
              {camps.map(camp => (
                <CampIndexItem
                  camp={camp}
                  key={camp.id}
                />
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CampIndex;