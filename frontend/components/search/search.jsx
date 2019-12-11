import React from 'react';
import CampIndex from '../camps/camp_index';
import CampsMap from '../camps_map/camps_map';

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
    this.props.fetchCamps()
      .then(() => {
        this.setState({ loaded: true });
      });
  }

  componentDidUpdate(oldProps) {
    if (oldProps.location.search !== this.props.location.search) {
      this.setState({ query: this.props.location.search });
    }
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
          <CampsMap camps={camps} query={this.state.query} />
        </div>
      </div>
    );
  }
}



export default Search;

