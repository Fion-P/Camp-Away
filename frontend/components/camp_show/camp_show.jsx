import React from 'react';
import CampArea from './camp_area';
import CampEssentials from './camp_essentials';
import {CampAmenities} from './camp_amenities';
import {CampActivity} from  './camp_activity_item';
import BookingFormContainer from '../bookings/booking_form_container';
import ReviewFormContainer from '../reviews/review_form_container';
import ReviewItem from '../reviews/review_item_container';
import Carousel from '../carousel/carousel';
import { Link } from 'react-router-dom';


class CampShow extends React.Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCamp(this.props.match.params.campId)
      .then( 
        res => {
          this.props.fetchUser(res.camp.host_id);
          res.camp.reviewIds.map((id) => {
            return this.props.fetchReview(id);
          });
        }
      );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.campId !== this.props.match.params.campId) {
      this.props.fetchCamp(this.props.match.params.campId);
    }
  }

  render () {
    let camp = this.props.camp;
    if (!camp) return null;
    let activities = this.props.camp.activities;
    let host = this.props.users[camp.host_id];
    if (!host) return null;
    let reviews = this.props.reviews;
    let reviewIds = this.props.camp.reviewIds;
    if (!reviewIds) return null;
    let reviewCount = reviewIds.length;
    let reviewTitle;
    if (reviewCount > 1 || reviewCount === 0) {
      reviewTitle = (
        <h1 className="review-count">{reviewCount} Written reviews</h1>
      )
    } else if (reviewCount === 1) {
      reviewTitle = (
        <h1 className="review-count">{reviewCount} Written review</h1>
      )
    }
    if (!camp.photoUrls) return null;
    // debugger;

    return (
      <div className="campShow">
        <div className="campImage">
          <img src={camp.photoUrls[0]}/>
          {/* <Carousel photoUrls={camp.photoUrls} /> */}
        </div>
        <div className="showArea">
          <div className="campinfo">
            <div className="campTitle">
              <div className="tags">   
                <span className="nametags"><Link to={`/camps`}>{camp.location}</Link></span> > <span className="nametags">{camp.camp_name}</span> >
              </div>
              <h1>
                {camp.camp_name}
              </h1>
            </div>

            <div className="camp-description">
              <div className="campHost">
                <h1>Hosted by</h1>
                <h2><Link to={`/users/${host.id}`}>{host.first_name} {host.last_name[0]}</Link></h2>
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

            <div className="question" >
              <h1 onClick={() => this.props.openModal('message')}>
                Have a question? <span className="message" >Send Host a message!</span>
              </h1>
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
              <div className="activities-box" >
                  {activities.map ((activity, idx) => {
                    return < CampActivity activity={activity.toLowerCase()} key={idx}/>
                  })}
              </div>
            </div>

            <div className="area-container">
              <h1>The vibe here at {camp.camp_name}</h1>
              <h2>A little sneak peek of this gorgeous land</h2>
              <div className="area">
                <div className="area-box">
                  <h2>{camp.terrain}</h2>
                  <h3>Listing's terrain</h3>
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
              {reviewTitle}
              <div className="review-index">
                  {reviewIds.map((id) => {
                    return <ReviewItem 
                      review={reviews[id]} 
                      key={id} 
                      users={this.props.users}
                      deleteReview= {this.props.deleteReview}
                      fetchUser = {this.props.fetchUser}
                    />
                  })}
              </div>
              <div className="r-form">
                <ReviewFormContainer camp={camp}/>
              </div>
            </div>
          </div>

          <div className="bookingBox">
            <div className="bookingContent">
              <BookingFormContainer camp={camp} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CampShow;