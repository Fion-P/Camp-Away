import React from 'react';
import CampIndex from '../camps/camp_index';
import CampsMap from '../camps_map/camps_map';
import { withRouter } from "react-router-dom";

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      query: ""
    };
  }

  componentDidMount() {
    this.setState({ query: this.props.location.search });
    if (this.props.location.search) {
      let queryString = this.props.location.search;
      let lat = parseFloat(queryString.split("=")[1].split("&")[0]);
      let lng = parseFloat(queryString.split("=")[2]);
      let bounds = { "northEast": {"lat": lat + 1, "lng": lng + 1}, 
        "southWest": { "lat": lat - 1, "lng": lng - 1}
      };
      this.props.fetchCamps(bounds)
        .then(() => {
          this.setState({ loaded: true });
        });
    } else {
      this.props.fetchCamps()
        .then(() => {
          this.setState({ loaded: true });
        });
    }
    
  }

  componentDidUpdate(oldProps) {
    if (oldProps.location.search !== this.props.location.search) {
      this.setState({ query: this.props.location.search });
      this.setState({loaded: false});
      if (this.props.location.search) {
        let queryString = this.props.location.search;
        let lat = parseFloat(queryString.split("=")[1].split("&")[0]);
        let lng = parseFloat(queryString.split("=")[2]);
        let bounds = {
          "northEast": { "lat": lat + 1, "lng": lng + 1 },
          "southWest": { "lat": lat - 1, "lng": lng - 1 }
        };
        this.props.fetchCamps(bounds)
          .then((res) => {
            // console.log(res);
            this.setState({ loaded: true });
          });
      } else {
        this.props.fetchCamps()
          .then(() => {
            this.setState({ loaded: true });
          });
      }
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <div>
        </div>
      )
    }
    let camps = this.props.camps;
    
    return (
      <div className="mapCamps">
        <div className="CIndex">
          <CampIndex camps={camps} query={this.state.query}/>
        </div>
        <div className="CMaps">
          <CampsMap camps={camps} query={this.state.query} />
        </div>
      </div>
    );
  }
}



export default Search;

