import React from 'react'
import './Projects.css'

// Project List component

const Projects = ({projects}) => {
  
  return (
    <div className='projects-main'>
      <h2>Checkout Some of my projects</h2>
        <div className='projects-container'>
           {projects.map((project) => {
                return(
                    <>
                        <div className='project'>
                          <h3>{project.title}</h3>
                          <h3>{}</h3>
                        </div>
                    </>
                )
           })}
        </div>
    </div>
  )
}

export default Projects