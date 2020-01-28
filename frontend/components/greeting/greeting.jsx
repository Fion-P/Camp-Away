import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Greeting extends React.Component {

  constructor(props) {
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    let path = this.props.location.pathname;

    if (path === "/") {
      this.props.logout();
    } else {
      this.props.logout()
        .then(() => this.props.history.push(`/`));
    }
  }

  render() {
    let { currentUser, logout, openModal } = this.props

    const display = currentUser ? (
      <div className="header_logged">
        <ul>
          <li>
            <h1 className="header-name"><Link to={`/users/${currentUser.id}`}>Hi, {currentUser.username}!</Link></h1>
          </li>
          <li>
            <a href="https://github.com/Fion-P/Full_Stack" target="_blank"> <FontAwesomeIcon icon={faGithub} className="icon2" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fion-pang-429172154/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon2" /></a>
          </li>
          <li>
            <h1 className="formBtn"><Link to="/camps"> Camps </Link></h1>
          </li>
          <li>
            <h1 className="formBtn " onClick={this.handleLogout}><span className="login-greeting">Logout</span></h1>
          </li>
        </ul>
      </div>
    ) : (
        <div className="header_unlogged">
          <ul>
            <li>
              <a href="https://github.com/Fion-P/Full_Stack" target="_blank"> <FontAwesomeIcon icon={faGithub} className="icon2" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fion-pang-429172154/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon2" /></a>
            </li>
            <li>
              <h1 className="formBtn"><Link className="btn" to="/camps"> Camps </Link></h1>
            </li>
            <li >
              <h1 className="formBtn" onClick={() => openModal('login')}><span className="login-greeting">Login</span></h1>
            </li>
            <br />
            <li>
              <h1 className="formBtn signup-greeting" onClick={() => openModal('signup')}>Signup</h1>
            </li>
          </ul>
        </div>
      );

    return (
      <header className="greeting">
        <div className="greeting">
          {display}
        </div>
      </header>
    );
  }
}

export default withRouter(Greeting);