import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import './Navigation.css'

const TopBar = () => {
  return (
    <div className='top-bar-container'>
        <h2>Martin Wilson</h2>
        <DropdownButton>
            <Dropdown.Item href="#/action-1">About Me</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Projects</Dropdown.Item>
            <Dropdown.Item href='#'>Contact Me</Dropdown.Item>
            <Dropdown.Item href='#'>LinkedIn</Dropdown.Item>
            <Dropdown.Item href='#'>Github</Dropdown.Item>
            <Dropdown.Item href='#'>Resume</Dropdown.Item>        
        </DropdownButton>
    </div>
  )
}

export default TopBar