import React from 'react';

class Message extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      message: ""
    };
    this.handleMessage = this.handleMessage.bind(this);
  }

  handleMessage(e) {
    this.setState( {message: e.target.value} );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.closeModal();
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
            > 
            </textarea>
            <br/>
          <button onClick={this.handleSubmit}>Send!</button>
        </form>
      </div>
    )
  }
}

export default Message;
