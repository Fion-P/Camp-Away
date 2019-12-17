import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMountain } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { log } from 'util';
import { withRouter } from "react-router-dom";



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

    this.escFunction = this.escFunction.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.clearErrors();
    document.addEventListener('keydown', this.escFunction);
  }
  
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction);
  }

  handleDemoUser() {
    this.inputUsername("DemoUser");
    setTimeout(() => {
      this.inputPassword("password");
    }, 1200);
    
  }

  inputUsername(username) {
    if (username.length <= 0) return;
    setTimeout( () => {
      let userArr = username.split("");
      let current = this.state.username;
      current += userArr.shift();
      this.setState({username: current});
      let newName = userArr.join('');
      this.inputUsername(newName);
    }, 120);
  }

  inputPassword(password) {
    if (password.length <= 0) {
      const user = Object.assign({}, this.state);
      return this.props
        .processForm(user)
        .then(res =>
          this.props.history.push(`/users/${res.currentUser.id}`)
        )
        .then(this.props.closeModal);
        // .then(this.props.history.push(`/users/${this.props.currentUser.id}`));
    }
    setTimeout(() => {
      let passArr = password.split("");
      let current = this.state.password;
      current += passArr.shift();
      this.setState({ password: current });
      let newPass = passArr.join('');
      this.inputPassword(newPass);
    }, 120);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props
      .processForm(user)
      .then(res => this.props.history.push(`/users/${res.currentUser.id}`))
      .then(this.props.closeModal);
      // .then(this.props.history.push(`/users/${this.props.currentUser.id}`));
  }

  escFunction(e) {
    if (e.keyCode === 27) {
      this.props.closeModal();
    }
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
        <div tabIndex="0" onKeyDown={this.escFunction}></div>
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
          <div className="demoDiv">
            <button onClick={this.handleDemoUser} className="demo">Demo Login</button>
          </div>
          <form>
            <div className="inputbox">
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                placeholder="Username"
              />
            </div>
            <div className="inputbox">
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')}
                placeholder="Password"
              />
            </div>
            <button onClick={this.handleSubmit}>Login!</button>
            <h5 className="sessionLink">Don't have an account? <Link to="/" onClick={this.props.otherForm}>Sign up</Link> here!</h5>
          </form>
        </div>
      </div>
    )
  }

}

export default withRouter(SessionForm);