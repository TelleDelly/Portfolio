import React from 'react'
import './Navigation.css'
import profile from '../../Assets/NavImages/about.png'
import projects from '../../Assets/NavImages/projects.png'
import contact from '../../Assets/NavImages/contact.png'
import github from '../../Assets/NavImages/github.png'
import linkedin from '../../Assets/NavImages/linkedin.png'
import resume from '../../Assets/NavImages/resume.png'


const Sidebar = () => {
  return (
    <div className='main-div'>
          <a href='#'><img src={profile} alt='About Me'></img></a>
          <a href='#'><img src={projects} alt='Projects'></img></a>
          <a href='#'><img src={contact} alt='Contact Me'></img></a>
          <a href='#'><img src={linkedin} alt='Checkout my linkedin page'></img></a>
          <a href='#'><img src={github} alt='Checkout my github'></img></a>
          <a href='resume'><img src={resume} alt='Checkout my resume'></img></a>
    </div>
  )
}

export default Sidebar