import React from 'react';
import CampIndexItem from './camp_index_item';
import { withRouter } from "react-router-dom";

// General page for camps index
// shows the individual camp info through the CampIndexItem
class CampIndex extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      camps: [],
    };
  }

  componentDidMount() {
    if (this.props.location.search) {
      let queryString = this.props.location.search;
      let lat = parseFloat(queryString.split("=")[1].split("&")[0]);
      let lng = parseFloat(queryString.split("=")[2]);
      let bounds = {
        "northEast": { "lat": lat + 2, "lng": lng + 2 },
        "southWest": { "lat": lat - 2, "lng": lng - 2 }
      };
      this.props.fetchCamps(bounds)
        .then((res) => {
          this.setState({ loaded: true,
            camps: res.camps });
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
      this.setState({ loaded: false });
      if (this.props.location.search) {
        let queryString = this.props.location.search;
        let lat = parseFloat(queryString.split("=")[1].split("&")[0]);
        let lng = parseFloat(queryString.split("=")[2]);
        let bounds = {
          "northEast": { "lat": lat + 2, "lng": lng + 2 },
          "southWest": { "lat": lat - 2, "lng": lng - 2 }
        };
        this.props.fetchCamps(bounds)
          .then((res) => {
            this.setState({
              loaded: true,
              camps: res.camps
            });
          });
      } else {
        this.props.fetchCamps()
          .then((res) => {
            this.setState({
              loaded: true,
              camps: res.camps
            });
          });
      }
    }
  }

  render() {
    let camps = this.state.camps;
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

export default withRouter(CampIndex);