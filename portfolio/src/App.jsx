import {smallImageDisplay as SmallDisplay} from "./components/AccentDisplayWithImage.jsx";
import NavBar from './components/Navigation.jsx'
import {aboutme as About} from "./components/Description.jsx";
import './App.css'
import { slideshowDisplay as Projects } from "./components/Project.jsx";
import backendImage from './assets/backend.png';
import codingImage from './assets/programming.png';
import toolsImage from './assets/tools.png';
import techImage from './assets/computer.png';
import darkThemeImage from './assets/darkTheme.png';

const projectItems = [
  {
    image: darkThemeImage,
    title: 'Penguin Technologies',
    description: 'An Avalonia-based project designed for an IT help desk company that incorporates Google Maps API for remote assistance.',
    link: 'https://github.com/TheBytro/penguin-technologies',
  },
  {
    image: darkThemeImage,
    title: 'Penguin Technologies 2',
    description: 'An Avalonia-based project designed for an IT help desk company that incorporates Google Maps API for remote assistance.',
    link: 'https://github.com/TheBytro/penguin-technologies',
  }

]

function App() {

  return (
    <>
      <NavBar />
      <section className="translate-y-30 md:translate-y-20 px-4 flex flex-col">
        <About />
        <section className="mt-5 scroll-mt-28" id="skills">
          <h2 className="text-xl font-semibold text-[#e0b3e8] text-center">My Skills:</h2>
          <section className="flex flex-row place-content-evenly flex-wrap">
            <SmallDisplay title="Back-End Development"
                          list={["Flask", "Node.js", "PostgreSQL", "Oracle SQL", "MongoDB", "REST APIs", "AWS", "Express", "Azure"]}
                          image={backendImage}/>
            <SmallDisplay title="Programming & Concepts"
                          list={["Python", 'C#', 'Java', 'Lua', 'Kotlin', 'Bash', 'OOP', 'Entity Framework', 'Agile', 'DevOps']}
                          image={codingImage}/>
            <SmallDisplay title="Tools" list={['Git', 'Jira', 'Gitlab CI (Pipelines)', 'GitHub']} image={toolsImage}/>
            <SmallDisplay title="Other Tech Experience" list={['Computer Building', 'Computer Repair', 'Raspberry Pi']}
                          image={techImage}/>
          </section>
        </section>
        <section className="mt-5 scroll-mt-28 flex flex-col" id="projects">
          <Projects items={projectItems} />
        </section>
      </section>
    </>
  )
}

export default App;
