import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "../styling/Sidebar.css";

export class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar-container'>
        <div className='sidebar-library-container'>
          <Icon
            className='sidebar-icons'
            icon='akar-icons:book'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>Library</Button>
        </div>

        <div className='sidebar-goals-container'>
          <Icon
            className='sidebar-icons'
            icon='mdi:bullseye-arrow'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>Goals</Button>
        </div>

        <div className='sidebar-stats-container'>
          <Icon
            className='sidebar-icons'
            icon='ic:baseline-query-stats'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>Statistics</Button>
        </div>

        <div className='sidebar-shelves-container'>
          <Icon
            className='sidebar-icons'
            icon='bx:bx-library'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>Shelves</Button>
        </div>

        <div className='sidebar-aboutus-container'>
          <Icon
            className='sidebar-icons'
            icon='ant-design:team-outlined'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>About Us</Button>
        </div>

        <div className='sidebar-settings-logout-container'>
          <Icon
            className='sidebar-icons'
            icon='bytesize:settings'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>Settings</Button>
          <Icon
            className='sidebar-icons'
            icon='ant-design:logout-outlined'
            width='30'
            height='30'
            hFlip={true}
            inline={true}
          />
          <Button className='sidebar-buttons'>Logout</Button>
        </div>
      </div>
    );
  }
}

//TODO: Layout sidebar how it should be
//TODO: Place sidebar how it should be
//TODO: Add template logo/name for now

export default Sidebar;
