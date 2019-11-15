import React from 'react';
import BookingItemContainer from '../bookings/booking_item_container';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

class Profile extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
      .then(() => this.setState({
        loaded: true
      }));

  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    const { user, fetchBooking, bookings, currentUserId} = this.props;
    if (!this.state.loaded) return null;
    console.log(user);
    // debugger
    let books = (
      <div className="private">
        <h2 className="no-books">Private</h2>
      </div>
    )
    if (!user) return null;
    if ( currentUserId === user.id ) {
      if (user.bookingIds.length > 0) {
        books = (
          <div className="bookings">
            {
              user.bookingIds.map(id => {
                return <BookingItemContainer booking={bookings[id]} key={id} />
              })}
          </div>
        )
      } else {
        books = (
          <div className="bookings">
            <h2 className="no-books">No current bookings!</h2>
          </div>
        )
      }
    } 
    let date = new Date(user.created_at).toDateString()
    // debugger;
    return (
      <div className="user-profile">
        <div className="user-info">
          <div className="profile-top">
            <div className="profile-photo">
              <FontAwesomeIcon icon={faMountain} className="mountain" /> 
            </div>
            <div className="profile-welcome">
              <h1>Welcome back,</h1>
              <h2>{user.first_name} {user.last_name[0]}.</h2>
            </div>
          </div>
          <div className="member-since">
            <h1>
              <FontAwesomeIcon icon={faHeart} className="heart" /> Member since: {date}
            </h1>
          </div>
          <div className="user-data">
            <h1>
              <span className="data-head"> Current bookings:</span> {user.bookingIds.length}
            </h1>
            <h1>
              <span className="data-head"> Username:</span> {user.username}
            </h1>
            <h1>
              <span className="data-head"> Email:</span> {user.email}
            </h1>
          </div>
          <div className="trusted-camper">
            <h1>
              <FontAwesomeIcon icon={faCheckCircle} className="check" /> Trusted Camper!
            </h1>
          </div>
        </div>
        <div className="my-bookings">
          <h1>My bookings</h1>
          {books}
        </div>
      </div>
    )
  }
}

export default Profile;