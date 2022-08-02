import './App.css';
import Header from './Components/Header/Header';
import ProjectCard from './Components/ProjectCard/ProjectCard';
import Bio from './Components/Bio/Bio';

const ProjectData = [
  {
    title: "Dummy Title",
    description: "Lorem Ipsum je demonstrativní výplňový text používaný v tiskařském a knihařském průmyslu. Lorem Ipsum je považováno za standard v této oblasti už od začátku 16. století, kdy dnes neznámý tiskař vzal kusy textu a na jejich základě vytvořil speciální vzorovou knihu. Jeho odkaz nevydržel pouze pět století, on přežil i nástup elektronické sazby v podstatě beze změny. Nejvíce popularizováno bylo Lorem Ipsum v šedesátých letech 20. století, kdy byly vydávány speciální vzorníky s jeho pasážemi a později pak díky počítačovým DTP programům jako Aldus PageMaker.",
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
  }
]

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Bio></Bio>
      <ProjectCard projectData={ProjectData[0]}></ProjectCard>
    </div>
  );
}

export default App;
