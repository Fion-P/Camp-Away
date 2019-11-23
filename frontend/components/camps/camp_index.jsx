import React from 'react';
import CampIndexItem from './camp_index_item'

class CampIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state =  {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.fetchCamps()
      .then(() => {
        this.setState( {loaded: true} );
      });
  }

  render() {
    let camps = this.props.camps;
    if (!this.state.loaded) {
      return (
        <div>
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