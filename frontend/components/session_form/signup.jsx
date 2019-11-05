import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <div className="errors">
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      </div>
    );
  }

  render() {

    return (
      <div className="form">
        <div className="formInside">
          <h3>Sign Up!</h3>
          <h4>Search, discover and book</h4>
          <h4>Everywhere you want to camp.</h4>
          <div className="mountainLogo">
            <img src="/mountain-transparent.png" />
          </div>

          {this.renderErrors()}
          <form>
              <input
                type="text"
                value={this.state.first_name}
                id="name-input1"
                onChange={this.handleInput('first_name')}
                placeholder="First name"
              />
              <input
                type="text"
                value={this.state.last_name}
                id="name-input2"
                onChange={this.handleInput('last_name')}
                placeholder="Last name"
              />
            <br />
            <br />
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder = "Email"
              />
            <br />
            <br />
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                placeholder="Username"
              />
            <br />
            <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password (min 6 characters)"
              />
            <br />
            <br />
            <button onClick={this.handleSubmit}>Sign Up!</button>
          </form>
          <br />
        </div>
      </div>
    )
  }
}

export default SessionForm;