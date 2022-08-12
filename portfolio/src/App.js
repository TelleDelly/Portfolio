import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from './Pages/Projects/Projects';
import Sidebar from './Components/Navigation/Sidebar';
import Landing from './Pages/Landing/Landing';
import AboutMe from './Pages/AboutMe/AboutMe';
import Project from './Pages/Projects/Project';
import { useEffect, useState } from 'react';

const ProjectData = [
  {
    title: "Sqaure Man",
    description: "A target bullet mania game where you dodge and weave while trying to obtain your highscore. I built a robust collision detection system in vanilla javascript, a random flight path generator for the targets, and used event handler decoupling to keep memory usage low.",
    techStack: ["javascript", "html", "css"],
    img: "",
    repoLink: "https://github.com/TelleDelly/squareMan",
    liveLink: ""
  },
  {
    title: "A Night Out",
    description: "A MVC full stack application to review music venues and artists seen. I developed a full crud controller for interaction with the data. I created view pages for venues and artists. I used vanilla CSS for styling",
    techStack: ["EJS", "javascript", "css", "express", "mongoose", "MongoDB","Node.js"],
    img: "",
    repoLink: "https://github.com/TelleDelly/A_Night_Out",
    liveLink: ""
  },
  {
    title: "Trailblazers",
    description: "A natural point of interest full stack web app. My first group project where I was tasked with primarily testing and developing the backend. Created filtered routes for a 35% reduciton in fetch times. Implemented a google maps component for our mapping service.",
    techStack: ["React", "javascript", "MongoDB", "mongoose", "express", "Node.js"],
    img: "",
    repoLink: "https://github.com/TelleDelly/NPI-backend",
    liveLink: "https://629ae6acfd78673090ac9aac--taupe-dodol-1145d5.netlify.app/"
  },
  {
    title: "Hiatus",
    description: "An abortion policy search tool and clinic finder app. I built out the backend and implement pasportJWT for select secure access to full crud for the site",
    techStack: ["React", "Bootstrap", "Axios", "MongoDB", "mongoose", "express", "Node.js", "PassportJWT"],
    img: "",
    repoLink: "https://github.com/TelleDelly/NPI-backend",
    liveLink: "https://hiatus.on.fleek.co/"
  }


]



function App() {

  const [isDeskTop, setDesktop] = useState(window.innerWidth)

  const updateMedia = () => {
    setDesktop(window.innerWidth > 768)
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia)
    return () => window.removeEventListener("resize", updateMedia)
  })

  return (
    <div className="App">
      
      {isDeskTop ? (
        <div className='navigation'>
        <Sidebar/>
        </div>
      )
      : <div className='top-navigation'>

      </div>
      }


    <div className='main-content'>
      <Landing/>
      <AboutMe/>
      <Projects projects={ProjectData}/>
      {/* <Project project={ProjectData[0]}/> */}
    </div>
    
    </div>
  );
}

export default App;
