import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import HomeContainer from './hompage/homepage_container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';

const App = () => (
  <div className="app">
    <div className="top">
      <Modal />
      <nav className=".nav-bar">
        <span className='header'>
          <h1><Link to="/">Camp<FontAwesomeIcon icon={faCampground} className="icon1" />way!</Link>

          </h1>
        </span>
        <span className="nav-right">
          <GreetingContainer />
        </span>
      </nav>
    </div>
    <div className="body">
      <Switch>
        <Route path="/" component={HomeContainer} />
        {/* <Redirect to="/" /> */}
      </Switch>
      {/* <img src="/mountain-transparent2.png" /> */}
    </div>
    <div className="footer">
      <img src="/mountain-transparent2.png" />
    </div>
  </div>
);

export default App;

