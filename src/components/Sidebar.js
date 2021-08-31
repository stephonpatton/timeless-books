import React, { Component } from "react";
import "../styling/Sidebar.css";

import { Button } from "@material-ui/core";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Library from "../pages/Library";
export class Sidebar extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div className='sidebar-container'>
            <div className='logo-container'>
              <img
                alt='Timeless Books Logo'
                src='../../assets/imgs/icons8-image-96.png'
                id='company-logo'
              ></img>
            </div>

            <div className='sidebar-content'>
              <div className='sidebar-library-container'>
                <Button
                  component={Link}
                  to='/library'
                  className='sidebar-buttons'
                >
                  Library
                </Button>
              </div>

              <div className='sidebar-goals-container'>
                <Button className='sidebar-buttons'>Goals</Button>
              </div>

              <div className='sidebar-stats-container'>
                <Button className='sidebar-buttons'>Statistics</Button>
              </div>

              <div className='sidebar-shelves-container'>
                <Button className='sidebar-buttons'>Shelves</Button>
              </div>

              <div className='sidebar-aboutus-container'>
                <Button className='sidebar-buttons'>About Us</Button>
              </div>
              <div className='sidebar-logout-settings-container'>
                <div className='sidebar-settings-container'>
                  <Button id='settings-butt' className='sidebar-buttons'>
                    Settings
                  </Button>
                </div>

                <div className='sidebar-logout-container'>
                  <Button id='logout-butt' className='sidebar-buttons'>
                    Logout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Switch>
      </Router>
    );
  }
}

//TODO: Layout sidebar how it should be
//TODO: Place sidebar how it should be
//TODO: Add template logo/name for now
//TODO: Add links to each sidebar item

export default Sidebar;
