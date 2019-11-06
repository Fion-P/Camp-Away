import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Greeting = ( { currentUser, logout, openModal } ) => {
  
  const display = currentUser ? (
    <div className="header_logged">
      <ul>
        <li>
          <h3 className="header-name">Hi, {currentUser.username}!</h3>
        </li>
        <li>
          <h3><a href="https://github.com/Fion-P/Full_Stack"> <FontAwesomeIcon icon={faGithub} className="icon2" /></a></h3>
        </li>
        <li>
          <h3><a href="https://www.linkedin.com/in/fion-pang-429172154/"><FontAwesomeIcon icon={faLinkedin} className="icon2" /></a></h3>
        </li>
        <li>
          <h3 className="formBtn"><Link to="/camps"> Camps </Link></h3>
        </li>
        <li>
          <h3 className="formBtn" onClick={logout}>logout</h3>
        </li>
      </ul>
    </div>
  ) : (
      <div className="header_unlogged">
        <ul>
          <li>
            <a href="https://github.com/Fion-P/Full_Stack"> <FontAwesomeIcon icon={faGithub} className="icon2" /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fion-pang-429172154/"><FontAwesomeIcon icon={faLinkedin} className="icon2" /></a>
          </li>
          <li>
            <h1 className="formBtn"><Link className="btn" to="/camps"> Camps </Link></h1>
          </li>
          <li>
            <h1 className="formBtn" onClick={() => openModal('signup')}>Signup</h1>
          </li>
          <br />
          <li>
            <h1 className="formBtn" onClick={() => openModal('login')}>Login</h1>
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

export default Greeting;