import React from 'react';

class Message extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: "",
      errors: ""
    };
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(e) {
    this.setState( {message: e.target.value} );
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.currentUser) {
      this.props.closeModal();
    } else {
      this.setState({ errors: 'Must be logged in to send message' })
    }
  }

  render () {
    return (
      <div className="message">
        <div onClick={this.props.closeModal} className="close-x">x</div>
        <form className="message-form">
             <textarea
              className="host-message"
              onChange={this.handleMessage}
              value={this.state.message}
              cols="30"
              rows="10"
              placeholder="Message your host..."
              required
            > 
            </textarea>
            <br/>
          <button onClick={this.handleSubmit}>Send!</button>
        </form>
        <h2 id="message-errors">{this.state.errors}</h2>
      </div>
    )
  }
}

export default Message;
