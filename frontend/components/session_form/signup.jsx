import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.errors = [];
  }

  componentDidMount(prevProps) {
    window.scrollTo(0, 0);
    this.props.clearErrors();
  }
  
  componentDidUpdate(prevProps) {
    
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(res => this.props.history.push(`/users/${res.currentUser.id}`))
      .then(this.props.closeModal);
      // .then(this.props.history.push(`/users/${this.props.currentUser.id}`));
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
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <h3>Sign Up!</h3>
          <h4>Search, discover and book</h4>
          <h4>Everywhere you want to camp.</h4>
          <div className="mountainLogo">
            <img src="/mountain-transparent.png" />
          </div>
          {this.renderErrors()}
          <form>
            <div className="inputbox">
              <input
                type="text"
                value={this.state.first_name}
                id="name-input1"
                onChange={this.handleInput('first_name')}
                placeholder="First name"
                required
              />
              <input
                type="text"
                required
                value={this.state.last_name}
                id="name-input2"
                onChange={this.handleInput('last_name')}
                placeholder="Last name"
                
              />
            </div>

            <div className="inputbox">
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput('email')}
                placeholder = "Email"
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                placeholder="Username"
                required
              />
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password (min 6 characters)"
              />
            </div>
            <button onClick={this.handleSubmit}>Sign Up!</button>
            <h5 className="sessionLink">Already have an account? <Link to="/" onClick={this.props.otherForm}>Login</Link> here!</h5>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(SessionForm);