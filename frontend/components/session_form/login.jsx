import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
    this.errors = [];
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearErrors();
  }

  handleDemoUser(event) {
    event.preventDefault();
    const demoUser = {
      username: "DemoUser",
      password: "password"
    };
    this.props.processForm(demoUser).then(this.props.closeModal);
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
    this.props.processForm(user).then(this.props.closeModal);
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
    // debugger
    return (
      <div className="form">
        <div className="formInside">
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <h3>Welcome back!</h3>
          <h4>It's about time for another camping trip</h4>
          <div className="mountainLogo">
            <img src="/mountain-transparent.png"/>
          </div>
          <div className="errors">
            {this.renderErrors()}
          </div>
          <br />
          <button onClick={this.handleDemoUser} className="demo">Demo Login</button>
          <br/>
          <form>
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
                placeholder="Password"
              />
            <br />
            <br />
            <button onClick={this.handleSubmit}>Login!</button>
            <h5 className="sessionLink">Don't have an account? <Link to="/" onClick={this.props.otherForm}>Sign up</Link> here!</h5>
          </form>
        </div>
      </div>
    )
  }

}

export default SessionForm;