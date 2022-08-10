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
    </div>
  )
}

export default Project