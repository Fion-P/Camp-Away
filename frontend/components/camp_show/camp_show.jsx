import React from 'react';


class CampShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchCamp(this.props.match.params.campId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.campId !== this.props.match.params.campId) {
      this.props.fetchCamp(this.props.match.params.campId);
    }
  }

  render () {
    let camp = this.props.camp;
    // console.log(camp)
    return (
      <h1>{camp.name}</h1>
    )
  }
}

export default CampShow;