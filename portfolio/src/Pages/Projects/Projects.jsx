import React from 'react'

// Project List component

const Projects = ({projects}) => {
  
  return (
    <div className='projects-main'>
        <div className='projects-container'>
           {projects.map((project) => {
                return(
                    <>
                        <div className='project'>
                            <p>{project.title}</p>
                        </div>
                    </>
                )
           })}
        </div>
    </div>
  )
}

export default Projects