import 'react-dates/initialize';
// import { DateRangePicker} from 'react-dates';
import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { withRouter } from 'react-router-dom';

class BookingForm extends React.Component {

  constructor(props) {
    super(props);
    let currentUserId;
    if (this.props.currentUser) {
      currentUserId = this.props.currentUser.id;
    }
    this.state = {
      camp_id: this.props.camp.id,
      user_id: currentUserId,
      num_guests: 1,
      check_in: null,
      check_out: null,
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuests = this.handleGuests.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleCheckIn(day) {
    this.setState({ check_in: day.toLocaleDateString() });
  }

  handleCheckOut(day) {
    this.setState({ check_out: day.toLocaleDateString() });
  }

  handleGuests(type) {
    event.preventDefault();
    if (type === 'minus' && this.state.num_guests > 1) {
      this.setState({ 'num_guests': this.state.num_guests - 1 })
    }
    if (type === 'plus' && this.state.num_guests < this.props.camp.max_guests) {
      this.setState({ 'num_guests': this.state.num_guests + 1 })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.check_in || !this.state.check_out) {
      return;
    } else if (this.props.currentUser) {
      const booking = Object.assign({}, this.state);
      this.props.createBooking(booking);
      this.props.history.push(`/users/${this.props.currentUser.id}`);
    } else {
      this.props.openModal('login');
    }
  }

  render() {
    // let {camp} = this.props;
    // let defaultCheckOut
    // if (this.state.check_in) {
    //   defaultCheckOut = new Date(this.state.check_in);
    //   defaultCheckOut = defaultCheckOut.setDate(defaultCheckOut.getDate() + camp.minimum_nights);
    // }
    let first = this.state.check_in;
    let second;
    if (!first) {
      second
    } else {
      second = new Date(this.state.check_in);
      second.setDate(second.getDate() + this.props.camp.minimum_nights);
    }
    return (
      <div className='booking-form'>
        <h1>${this.props.camp.price}</h1>
        <h2>per night (minimum {this.props.camp.minimum_nights} nights)</h2>
        <form >
            <div className='booking-input-items'>
              <div className='booking-input'>
                <div className='check-in'>
                  <h1 className='booking-input-label'>Check in</h1>

                  <DayPickerInput
                    placeholder='Select date'
                    onDayChange={day => this.handleCheckIn(day)}
                    formatDate={formatDate}
                    parseDate={parseDate}

                    dayPickerProps={{
                      disabledDays: { before: new Date() },
                    }}

                  />
                </div>

                <div className='check-out'>
                  <h1 className='booking-input-label'>Check out</h1>
                  <DayPickerInput
                    placeholder='Select date'
                    onDayChange={day => this.handleCheckOut(day)}
                    formatDate={formatDate}
                    parseDate={parseDate}

                    dayPickerProps={{
                      disabledDays: { before: second },
                    }}

                  />
                </div>

                <div className='book-guests'>
                    <h1 className='booking-input-label'>Guests</h1>
                  <div className='guest-input'>
                      <button id='step-btn' onClick={() => this.handleGuests('minus')}>-</button>
                      <input
                        id='guests'
                        type='number'
                        onChange={this.handleInput('num_guests')}
                        value={this.state.num_guests}
                        name='quantity'
                        max={this.props.camp.max_guest}
                        min='1'
                      />
                      <button id='step-btn' onClick={() => this.handleGuests('plus')}>+</button>
                  </div>
                </div>
              </div>
          </div>
              <div className='booking-submit'>
                <button id='booking-submit-btn' onClick={this.handleSubmit}>Book Now!</button>
              </div>
        </form>
      </div>
    )
  }
}

export default withRouter(BookingForm);