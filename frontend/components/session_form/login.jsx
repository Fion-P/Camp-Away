import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";



class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleDemoUser(event) {
    event.preventDefault();
    const demoUser = {
      username: "DemoUser",
      password: "password"
    };
    this.props.processForm(demoUser);
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
    let errors = this.props.errors;
    let errorMsg = (
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    errors = [];
    return errorMsg;
  }

  render() {
    return (
      <div className="form">
        <div className="formInside">
          <h3>Welcome back!</h3>
          <h4>It's about time for another camping trip</h4>
          <div className="mountainLogo">
            <img src="/mountain-transparent.png"/>
          </div>
          <button onClick={this.handleDemoUser} className="demo">Demo Login</button>
          <br/>
          <div className="errors">
            {this.renderErrors()}
          </div>
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
          </form>
        </div>
      </div>
    )
  }

}

export default SessionForm;