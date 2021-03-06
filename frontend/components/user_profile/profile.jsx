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
      .then(() => {
        this.setState({
          loaded: true
        });
      });

  }

  componentDidUpdate(oldProps) {
    if (oldProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    const { user, fetchBooking, bookings, currentUserId} = this.props;
    if (!this.state.loaded) return null;
    let books = (
      <div className="private">
        <h2 className="no-books">Private</h2>
      </div>
    )

    // Organize bookings by date into past and current
    let currentBookings = bookings.filter( book => {
      return new Date(book.check_out) >= new Date(Date.now())
    });
    let sortedBookings = currentBookings.sort(function(a, b) {
      return (new Date(a.check_in) - new Date(b.check_in));
    });

    let pastBookings = bookings.filter( book => {
      return new Date(book.check_out) < new Date(Date.now())
    })
    let sortedPast = pastBookings.sort(function (a, b) {
      return (new Date(a.check_in) - new Date(b.check_in));
    });

    let upcomingBooks = <h2 className="no-books">No current bookings!</h2>;
    if (sortedBookings.length > 0 ) {
      upcomingBooks =  (
        <div className="bookings">
          {
            sortedBookings.map(booking => {
              return <BookingItemContainer booking={booking} key={booking.id} />
            })
          }
        </div>
      )
    }

    
    let passedBooks = <h2 className="no-books">No past bookings!</h2>;
      if (sortedPast.length > 0) {
        passedBooks = (
          <div className="bookings">
            {
              sortedPast.map(booking => {
                return <BookingItemContainer booking={booking} key={booking.id} />
              })
            }
          </div>
        )
      }

    if (!user) return null;
    if ( currentUserId === user.id ) {
        books = (
          <div>
            <h1 className="profile-books" >Current Bookings</h1>
            {upcomingBooks}
            <h1 className="profile-books past-books" >Past Bookings</h1>
            {passedBooks}
          </div>
        )
      // } else {
      //   books = (
      //     <div className="bookings">
      //       <h2 className="no-books">No current bookings!</h2>
      //     </div>
      //   )
      // }
    } 

    let date = new Date(user.created_at).toDateString()
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
              <span className="data-head"> Current bookings:</span> {currentBookings.length}
            </h1>
            <h1>
              <span className="data-head"> Past bookings:</span> {pastBookings.length}
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