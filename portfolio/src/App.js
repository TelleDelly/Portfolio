import './App.css';

import Projects from './Pages/Projects/Projects';
import Sidebar from './Components/Navigation/Sidebar';
import Landing from './Pages/Landing/Landing';
import AboutMe from './Pages/AboutMe/AboutMe';
import Project from './Pages/Projects/Project';

const ProjectData = [
  {
    title: "Dummy Title",
    description: "Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.",
    techstack: ['javascript', 'mongoose', 'mongodb', 'react'],
    imgList: [
              {alt: "picture 1 of project", src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVr2aILlsJNdn8TCJgcIGX6hhGCOGE_cC8SQ&usqp=CAU"},
              {alt: "picture 2 of project", src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmx8pQ56L4m5OXeaA16ej6vbqgpqWXmESBYg&usqp=CAU"}
              ]
  },
  {
    title: "Dummy Title 2",
    description: "Je obecně známou věcí, že člověk bývá při zkoumání grafického návrhu rozptylován okolním textem, pokud mu dává nějaký smysl. Úkolem Lorem Ipsum je pak nahradit klasický smysluplný text vhodnou bezvýznamovou alternativou s relativně běžným rozložením slov. To jej dělá narozdíl od opakujícího se Tady bude text. Tady bude text... mnohem více čitelnějším. V dnešní době je Lorem Ipsum používáno spoustou DTP balíků a webových editorů coby výchozí model výplňového textu. Ostatně si zkuste zadat frázi lorem ipsum do vyhledavače a sami uvidíte. Během let se objevily různé varianty a odvozeniny od klasického Lorem Ipsum, někdy náhodou, někdy účelně (např. pro pobavení čtenáře).",
    imgList: [
      {alt: "picture of project 2", src: "https://preview.redd.it/qo6bq6rc8o691.jpg?width=640&crop=smart&auto=webp&s=a90934f0ab449d3181f5ea85143c5f67a44cd365"},
      {alt: "picture of project 2 2", src: "https://pbs.twimg.com/media/FUs2vN-UsAAn0E_?format=jpg&name=large"}
    ]
  },
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
  return (
    <div className="App">
      <div className='navigation'>
        <Sidebar/>
      </div>
    
    <div className='main-content'>
      <Landing/>
      <AboutMe/>
      {/* <Projects projects={ProjectData}/> */}
      <Project project={ProjectData[0]}/>
    </div>
    
    </div>
  );
}

export default App;
