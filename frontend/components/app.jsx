import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import GreetingContainer from "./greeting/greeting_container";
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div className="app">
    <header>
      <span className='header'>
        <Link to="/"><h1>Camp<FontAwesomeIcon icon={faCampground} className="icon1" />way!</h1></Link>
      </span>
      <GreetingContainer />
    </header>
    <br/>
    <br/>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;
