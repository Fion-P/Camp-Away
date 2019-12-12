import React from 'react'

class DeleteBooking extends React.Component {

  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();

    const bookingId = this.props.bookingId;
    this.props.delete(bookingId).then(() => this.props.closeModal())
  }

  render() {
    return (
      <div className="delete-booking-form">
        <h2 onClick={this.props.closeModal} className="delete-booking-close">
          x
        </h2>
        <div className="delete-booking-form-inside">
          <div className="delete-question">
            {/* <h1>Are you sure you want to <br /> cancel your booking?</h1> */}
            <h1> Are you sure you want to </h1>
            <h1> cancel your booking? </h1>
          </div>
          <div className="delete-booking-buttons">
            <div className="delete-booking-button">
              <button onClick={this.handleDelete}>
                Yes, cancel it
              </button>
            </div>
            <button onClick = {() => this.props.closeModal()}>
              No, I want to keep it
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default DeleteBooking;