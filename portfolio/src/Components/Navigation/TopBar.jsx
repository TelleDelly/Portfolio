import React from 'react'
import { Button, Dropdown, DropdownButton } from 'react-bootstrap'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import './Navigation.css'
import resume from '../../Assets/Martin_Wilson_Resume.pdf'

const TopBar = () => {
  return (
    <div className='top-bar-container'>
        <h2>Martin Wilson</h2>
        <DropdownButton>
            <Dropdown.Item href="#about-me-main">About Me</Dropdown.Item>
            <Dropdown.Item href="#projects-main">Projects</Dropdown.Item>
            <Dropdown.Item href='#contact-main-container'>Contact Me</Dropdown.Item>
            <Dropdown.Item target='_blank' href='https://www.linkedin.com/in/martin-wilson-tel/'>LinkedIn</Dropdown.Item>
            <Dropdown.Item target='_blank' href='https://github.com/TelleDelly'>Github</Dropdown.Item>
            <Dropdown.Item href={resume} download>Resume</Dropdown.Item>        
        </DropdownButton>
    </div>
  )
}

export default TopBar