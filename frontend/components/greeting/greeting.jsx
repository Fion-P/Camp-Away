import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div className="header_logged">
      <button onClick={logout}>logout</button>
    </div>
  ) : (
      <div className="header_unlogged">
        <ul>
          <li>
            <Link className="btn" to="/signup"> Sign Up </Link>
          </li>
          <br />
          <li>
            <Link className="btn" to="/login"> Log In </Link>
          </li>
        </ul>
      </div>
    );

  return (
    <header className="greeting">
      <div>
        {display}
      </div>
    </header>
  );
}

export default Greeting;