import React from 'react';
import { Link } from 'react-router-dom';

class BookingItem extends React.Component {

  // fetches the camp that is booked
  componentDidMount() {
    this.props.fetchCamp(this.props.booking.camp_id);
  }
  
  // renders the camp information and booking information
  render() {
    let {booking, camps} = this.props;
    let camp = camps[booking.camp_id];
    if (!camp) return null;
    return (
      <div className="user-bookings">
        <div className="each-booking">
          <Link to={`/camps/${camp.id}`}>
            <li className="campIndexItem">
              <div className="index-photo">
                <img src={camp.photoUrls[0]} />
              </div>
              <div className="campNameLocation">
                <h3> {camp.camp_name} </h3>
                <h4> {camp.location} </h4>
              </div>
              <div className="campPrice">
                <h5> ${camp.price}/night </h5>
              </div>
              <br />
            </li>
          </Link>
        </div>
        <div className="booking-info">
          <div className="booking-funcs">
            <div className="booking-item">
              <div className="item-info">
                <h1>Check-in</h1>
                <h2>{booking.check_in}</h2>
              </div>
            </div>
            <div className="booking-item">
              <div className="item-info">
                <h1>Check-out</h1>
                <h2>{booking.check_out}</h2>
              </div>
            </div>
            <div className="booking-item">
              <div className="item-info">
                <h1>Guests</h1>
                <h2>{booking.num_guests}</h2>
              </div>
            </div>
          </div>
          <div className="cancel-booking">
            <button onClick={() => this.props.deleteBooking(booking.id)}>Cancel</button>
          </div>
        </div>
      </div>

    )
  }
}

export default BookingItem;