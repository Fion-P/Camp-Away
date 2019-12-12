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
  // handleSubmit(e) {
  //   e.preventDefault();
  //   const review = Object.assign({}, this.state);
  //   this.props.updateReview(review).then(this.props.closeModal);
  // }

  render() {
    // debugger;
    let bookingId = this.props.bookingId;
    console.log(this.props);
    // debugger
    return (
      <div className="delete-booking-form">
        <div className="delete-question">
          <h1>Are you sure you want to cancel your booking?</h1>
          <button onClick={this.handleDelete}>
            Yes, cancel it
          </button>
          <button onClick = {() => this.props.closeModal()}>
            No, I want to keep it
          </button>
        </div>
      </div>
    )
  }

}

export default DeleteBooking;