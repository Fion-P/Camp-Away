import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="form">
        <div className="formInside">
          <h3>Login!</h3>
          {this.renderErrors()}
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
          <br />
        </div>
      </div>
    )
  }

}

export default SessionForm;