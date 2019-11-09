import React from 'react';
import CampArea from './camp_area';
import CampEssentials from './camp_essentials';
import {CampAmenities} from './camp_amenities';
import {CampActivity} from  './camp_activity_item';

class CampShow extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0)
    this.props.fetchCamp(this.props.match.params.campId)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.campId !== this.props.match.params.campId) {
      this.props.fetchCamp(this.props.match.params.campId);
    }
  }

  render () {
    let camp = this.props.camp;
    if (!camp) return null;
    let activities = this.props.camp.activities
    return (
      <div className="campShow">
        <div className="campImage">
          <h2>Image area</h2>
        </div>
        <div className="showArea">
          <div className="campinfo">
            <div className="campTitle">
              <div className="tags">
                <span className="nametags">{camp.location}</span> > <span className="nametags">{camp.camp_name}</span> >
              </div>
              <h1>
                {camp.camp_name}
              </h1>
            </div>

            <div className="camp-description">
              <div className="campHost">
                {/* <h1>{hos.first_name}</h1>
                <h1>{host.last_name}</h1> */}
                {/* {camp.host.first_name} */}
              </div>
              <div className="description">
                {camp.description}
              </div>
            </div>

            <div className="campBooleans">
              <div className="info-cards">
                <h2>Campsite area</h2>
                <CampArea camp={camp} />
              </div>
              <div className="info-cards">
                <h2>Essentials</h2>
                <CampEssentials camp={camp} />
              </div>
              <div className="info-cards">
                <h2>Amenities</h2>
                <CampAmenities camp={camp} />
              </div>
            </div>

            <div className="question">
              Have a question? <span className="message">Send Host a message!</span>
            </div>

            <div className="details-box">
              <div className="details">
                <h2>Details</h2>
              </div>
              <div className="info">
                <div className="col1">
                  <span className="info-head">Check in:</span> {camp.checkin_time}
                  <br/>
                  <span className="info-head">Check out:</span> {camp.checkout_time}
                  <br/>
                  <span className="info-head">Cancellation policy:</span> Flexible
                </div>
                <div className="col2">
                  <span className="info-head">On arrival:</span> Meet and greet
                  <br />
                  <span className="info-head">Minimum nights:</span> {camp.minimum_nights} night
                  <br />
                  <span className="info-head">Accepts bookings:</span> 12 months out
                </div>
              </div>
            </div>

            <div className="activities">
              <h1>Activities</h1>
              <h2>Offered on the Host's property or nearby.</h2>
              <div className="activities-box">
                  {activities.map (activity => {
                    return < CampActivity activity={activity.toLowerCase()} />
                  })}
              </div>
            </div>

            <div className="area-container">
              <h1>The vibe here at {camp.camp_name}</h1>
              <h2>A little sneak peek of this gorgeous land</h2>
              <div className="area">
                <div className="area-box">
                  <h2>terrain</h2>
                </div>
                <div className="area-box">
                  <h2>{camp.elevation}ft</h2>
                  <h3>Listing's elevation</h3>
                </div>
                <div className="area-box">
                  <h2>{camp.weather}°F</h2>
                  <h3>Clear today</h3>
                </div>
              </div>
            </div>

              <div className="reviews">
                <h2>create reviews</h2>
              </div>
            </div>

          <div className="bookingBox">
            <div className="bookingContent">
              <h2>booking box</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampShow;