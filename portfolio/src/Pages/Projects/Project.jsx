import React, { useEffect, useState } from 'react'

const prepTechStack = (techStack) => {
  let techstring = ""
  techStack.forEach((tech) => {
    return techstring += ` ${tech}`
  })
  return techstring
}


//Rounded corners and box shadow on project cards
const Project = ({project}) => {

  const [techStackList, setTechStackList] = useState();

  useEffect(() => {
    setTechStackList(prepTechStack(project.techstack));
  })

  return (
    <div className='project'>
        <div className='title-and-stack'>
          <h1>{project.title}</h1>
          <p>{techStackList}</p>
        </div>
        <div className='picture'>
          <h1>Picture</h1>
        </div>
        <div className='description'>
          <p>{project.description}</p>
        </div>
        <div className='repo-link'>
          <a href={project.repoLink}>Repo</a>
        </div>
        <div className='live-link'>
          <a href={project.liveLink}>Live Site</a>
        </div>
    </div>
  )
}

export default Project