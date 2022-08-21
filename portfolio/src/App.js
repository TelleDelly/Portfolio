import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Projects from './Pages/Projects/Projects';
import Sidebar from './Components/Navigation/Sidebar';
import Landing from './Pages/Landing/Landing';
import AboutMe from './Pages/AboutMe/AboutMe';
import Project from './Pages/Projects/Project';
import { useEffect, useState } from 'react';
import TopBar from './Components/Navigation/TopBar';
import Squareman from './Assets/Pictures/squareman1.PNG'
import AnightOut from './Assets/Pictures/anightout.png'
import TrailBlazer from './Assets/Pictures/trailblazers2.PNG'
import hiatus from './Assets/Pictures/hiatus1.PNG'
import ContactMe from './Pages/ContactMe/ContactMe';


// {
//   title: "A Night Out",
//   description: "A MVC full stack application to review music venues and artists seen. I developed a full crud controller for interaction with the data. I created view pages for venues and artists. I used vanilla CSS for styling",
//   techStack: ["EJS", "Javascript", "CSS", "Express", "Mongoose", "MongoDB","Node.js"],
//   img: AnightOut,
//   repoLink: "https://github.com/TelleDelly/A_Night_Out",
//   liveLink: ""
// },


const ProjectData = [
  {
    title: "Square Man",
    description: "A target bullet mania game where you dodge and weave while trying to obtain your highscore. I built a robust collision detection system in vanilla javascript, a random flight path generator for the targets, and used event handler decoupling to keep memory usage low.",
    techStack: ["Javascript", "HTML", "CSS"],
    img: Squareman,
    repoLink: "https://github.com/TelleDelly/squareMan",
    liveLink: "https://telledelly.github.io/squareMan/index.html"
  },
  {
    title: "Trailblazers",
    description: "A natural point of interest full stack web app. My first group project where I was tasked with primarily testing and developing the backend. Created filtered routes for a 35% reduciton in fetch times. Implemented a google maps component for our mapping service.",
    techStack: ["React", "Javascript", "MongoDB", "Mongoose", "Express", "Node.js"],
    img: TrailBlazer,
    repoLink: "https://github.com/TelleDelly/NPI-backend",
    liveLink: "https://629ae6acfd78673090ac9aac--taupe-dodol-1145d5.netlify.app/"
  },
  {
    title: "Hiatus",
    description: "An abortion policy search tool and clinic finder app. I built out the backend and implement pasportJWT for select secure access to full crud for the site",
    techStack: ["React", "Bootstrap", "Axios", "MongoDB", "Mongoose", "Express", "Node.js", "PassportJWT"],
    img: hiatus,
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
        <TopBar/>
      </div>
      }


    <div className='main-content'>
      <Landing/>
      <AboutMe/>
      <Projects projects={ProjectData}/>
      <ContactMe/>
    </div>
    
    </div>
  );
}

export default App;
