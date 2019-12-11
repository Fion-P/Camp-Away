import React from 'react';
import GreetingContainer from "../greeting/greeting_container";
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from "react-router-dom";
import NavSearch from "./nav_search_container";

class NavBar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: false
    };
  }

  render() {
    let profile = this.state.users;
    // console.log(this.props.location);
    let search 
    if (this.props.location.pathname !== "/") {
      search = <NavSearch profile={profile}/>
    }

    return (
      <nav className=".nav-bar">
        <span className="header">
          {/* <h1><Link to="/">Camp<FontAwesomeIcon icon={faCampground} className="icon1" />way!</Link> */}
          <h1>
            <Link to="/">Camp Away</Link>
          </h1>
          <span className="header-search">
            {search}
          </span>
        </span>
        <span className="nav-right">
          <GreetingContainer />
        </span>
      </nav>
    );
  }
}

export default withRouter(NavBar);