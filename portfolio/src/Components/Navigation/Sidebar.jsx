import React from 'react'
import Nav from 'react-bootstrap/Nav'
import './Navigation.css'
import profile from '../../Assets/NavImages/about.png'
import projects from '../../Assets/NavImages/projects.png'
import contact from '../../Assets/NavImages/contact.png'
import github from '../../Assets/NavImages/github.png'
import linkedin from '../../Assets/NavImages/linkedin.png'


//Testing tracking

const Sidebar = () => {
  return (
    <Nav className="side-div" onMouseOver={(selected) => console.log(selected)}>
      <Nav.Item className="nav-item">
        <Nav.Link href='#landing'><img src={profile} alt='About Me'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link href='#projects'><img src={projects} alt='Projects'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link href='#contact-me'><img src={contact} alt='Contact Me'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link target='_blank' href='https://www.linkedin.com/in/martin-wilson-tel/'><img src={linkedin} alt='Checkout my linkedin page'></img></Nav.Link>
      </Nav.Item>
      <Nav.Item className="nav-item">
        <Nav.Link target='_blank' href='https://github.com/TelleDelly'><img src={github} alt='Checkout my github'></img></Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Sidebar