import React from 'react';
import CampIndex from '../camps/camp_index';
import CampsMap from '../camps_map/camps_map';


const Search = ({ camps, fetchCamps }) => {
  return (
    <div className="mapCamps">
      <div className="CIndex">
        <CampIndex camps={camps} fetchCamps={fetchCamps} />
      </div>
      <div className="CMaps">
        <CampsMap camps={camps} />
      </div>  
    </div>
  )
}


export default Search;

