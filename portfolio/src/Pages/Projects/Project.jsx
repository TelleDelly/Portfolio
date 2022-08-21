import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import './Projects.css'

// Rounded corners and box shadow on project cards
const Project = ({project}) => {

 
  

  const [techStackList, setTechStackList] = useState();

  useEffect(() => {
    let techstack = ''
  project.techStack.forEach((tech) => {
    techstack = techstack + `${tech} `
  })
  setTechStackList(techstack)
  },[])

  return (
    <div className='project'>
        <div className='title-and-stack'>
          <h1>{project.title}</h1>
          <p>{techStackList}</p>
        </div>
        <div className='picture'>
          <img className='project-image' src={project.img}></img>
        </div>
        <div className='description'>
          <p>{project.description}</p>
        </div>
        <div className='repo-link'>
          <Button><a target='_blank' href={project.repoLink}>Repo</a></Button>
          
        </div>
        <div className='live-link'>
          <Button><a target='_blank' href={project.liveLink}>Live Site</a></Button>
        </div>
    </div>
  )
}

export default Project