import React from 'react'
import Project from './Project'
import './Projects.css'

// Project List component

const Projects = ({projects}) => {
  
  return (
    <div id='projects-main'>
      <h2>Checkout Some of my projects</h2>
        <div className='projects-container'>
           {projects.map((project) => {
            return <Project project={project}/>
           })}
        </div>
    </div>
  )
}

export default Projects