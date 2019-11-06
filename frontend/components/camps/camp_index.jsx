import React from 'react';
import CampIndexItem from './camp_index_item'

class CampIndex extends React.Component {
  componentDidMount() {
    this.props.fetchCamps();
  }

  render() {
    let camps = this.props.camps;
    return (
      <div className="indexPage">
        <div className="camps">
          <h1>The best camping near you! </h1>
          <h2>Pitch a tent in the big city or rough it in the challenging backcountry!</h2>
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