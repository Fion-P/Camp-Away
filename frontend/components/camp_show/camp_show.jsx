import React from 'react';


class CampShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchCamp(this.props.match.params.campId);
  }

  render () {
    let camp = this.props.camp;

    return (
      <h1>{camp.name}</h1>
    )
  }
}

export default CampShow;