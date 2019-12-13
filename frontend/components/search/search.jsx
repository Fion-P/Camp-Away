import React from 'react';
import CampIndex from '../camps/camp_index_container';
import CampsMap from '../camps_map/camps_map_container';
import { withRouter } from "react-router-dom";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      query: ""
    };
  }
  render() {
    
    return (
      <div className="mapCamps">
        <div className="CIndex">
          <CampIndex />
        </div>
        <div className="CMaps">
          <CampsMap />
        </div>
      </div>
    );
  }
}



export default Search;

