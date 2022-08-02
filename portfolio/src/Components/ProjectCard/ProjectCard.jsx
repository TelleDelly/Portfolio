import './ProjectCard.css'
import React, {useState} from 'react'
import { Carousel, CarouselItem,Button } from 'react-bootstrap'

const ProjectCard = ({projectData}) => {
    const [stringMax, setStringMax] = useState(200);
    // const description = create
  
    // if(description.length > stringMax){
    //     setDescription(description.slice(0,stringMax) + '...')
    // } 

    return (
    <div className='project-card'>
        <h1>{projectData.title}</h1>
        <p>{projectData.description.length > stringMax
        ? projectData.description.slice(0,stringMax) + ' ...'
        : projectData.description        
        }</p>
        <Carousel interval={3000}>
            {projectData.imgList  && projectData.imgList.map((image) => {
                <CarouselItem>
                    <img alt={image.altText} src={image.src}/>
                </CarouselItem>
            })}
        </Carousel>
        <div className='project-card-button-group'>
        <Button className='header-button' href="https://github.com/TelleDelly">Project Repo</Button>
        <Button className='header-button' href='https://www.linkedin.com/in/martin-wilson-tel/'>Live Site</Button>
        </div>
    </div>
  )
}

export default ProjectCard