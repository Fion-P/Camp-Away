import React from 'react';
import CampIndex from '../camps/camp_index';
import CampsMap from '../camps_map/camps_map';


// const Search = ({ camps, fetchCamps }) => {
//   return (
//     <div className="mapCamps">
//       <div className="CIndex">
//         <CampIndex camps={camps} fetchCamps={fetchCamps} />
//       </div>
//       <div className="CMaps">
//         <CampsMap camps={camps} />
//       </div>  
//     </div>
//   )
// }

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }

  componentDidMount() {
    this.props.fetchCamps()
      .then(() => {
        this.setState({ loaded: true });
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
      <div className="mapCamps">
        <div className="CIndex">
          <CampIndex camps={camps} />
        </div>
        <div className="CMaps">
          <CampsMap camps={camps} />
        </div>  
      </div>
    )
  }
}



export default Search;

