import React from "react";
import {Route, Redirect, Switch, Link, HashRouter} from 'react-router-dom';

import NavBar from "./nav-bar/nav-bar";
import GreetingContainer from "./greeting/greeting_container";
import HomeContainer from './hompage/homepage_container';
import CampIndexContainer from './camps/camp_index_container';
import SearchContainer from './search/search_container';
import CampShowContainer from './camp_show/camp_show_container';
import ProfileContainer from './user_profile/profile.container';
import Prefooter from "./prefooter/prefooter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCampground } from "@fortawesome/free-solid-svg-icons";
import { faTree } from "@fortawesome/free-solid-svg-icons";
import { AuthRoute } from '../util/route_util';
import Modal from './modal/modal';


const App = () => {
  return (
    <div className="app">
      <div className="top">
        <Modal />
        <NavBar />
      </div>
      <div className="body">
        <Switch>
          <Route exact path="/camps/:campId" component={CampShowContainer} />
          <Route exact path="/camps" component={SearchContainer} />
          <AuthRoute exact path="/users/:userId" component={ProfileContainer} />
          <Route path="/" component={HomeContainer} />
          {/* <Redirect to="/" /> */}
        </Switch>
        
        {/* <img src="/mountain-transparent2.png" /> */}
      </div>
      <div className="footer">
        <img src="/mountain-transparent2.png" />
      </div>
    </div>
  )
};

export default App;

