import React from 'react'
import Project from './Project'
import './Projects.css'

// Project List component

const Projects = ({projects}) => {
  
  return (
    <div className='projects-main'>
      <h2>Checkout Some of my projects</h2>
        <div className='projects-container'>
           <Project project={projects[0]}/>
           <Project project={projects[1]}/>
        </div>
    </div>
  )
}

export default Projects