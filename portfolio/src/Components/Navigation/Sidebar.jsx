import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'
import profile from '../../Assets/NavImages/about.png'
import projects from '../../Assets/NavImages/projects.png'
import contact from '../../Assets/NavImages/contact.png'
import github from '../../Assets/NavImages/github.png'
import linkedin from '../../Assets/NavImages/linkedin.png'
import resume from '../../Assets/NavImages/resume.png'

import resumeDownload from '../../Assets/Martin_Wilson_Resume.pdf'




//Testing tracking

const Sidebar = () => {
  return (
    <Nav className="side-div" onMouseOver={(selected) => console.log(selected)}>
      <Nav.Item className="nav-item">
        <Nav.Link href='#about-me-main'><img classname="side-bar-image" src={profile} alt='About Me'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link href='#projects-main'><img classname="side-bar-image" src={projects} alt='Projects'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link href='#contact-main-container'><img src={contact} alt='Contact Me' classname="side-bar-image"></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link target='_blank' href='https://www.linkedin.com/in/martin-wilson-tel/'><img classname="side-bar-image" src={linkedin} alt='Checkout my linkedin page'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link target='_blank' href='https://github.com/TelleDelly'><img src={github} alt='Checkout my github' classname="side-bar-image"></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className='nav-item'>
        <Nav.Link href={resumeDownload} download><img src={resume} alt='Download my resume'></img></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Sidebar