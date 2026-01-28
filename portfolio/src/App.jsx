import {smallImageDisplay as SmallDisplay, experienceImageDisplay as ExperienceDisplay} from "./components/AccentDisplayWithImage.jsx";
import NavBar from './components/Navigation.jsx'
import {aboutme as About} from "./components/Description.jsx";
import './App.css'
import { slideshowDisplay as Projects } from "./components/Project.jsx";
import backendImage from './assets/backend.png';
import codingImage from './assets/programming.png';
import toolsImage from './assets/tools.png';
import techImage from './assets/computer.png';
import darkThemeImage from './assets/darkTheme.png';
import readingImage from './assets/readingapp.jpg'
import irentImage from './assets/irent.jpg';

const projectItems = [
  {
    image: darkThemeImage,
    title: 'Penguin Technologies',
    description: 'An Avalonia-based project designed for an IT help desk company that incorporates Google Maps API for remote assistance.',
    link: 'https://github.com/TheBytro/penguin-technologies',
  },
  {
    image: darkThemeImage,
    title: 'GameShop',
    description: 'A project utilizing Java Swing to display a clean GUI for purchasing games from a generic game store',
    link: 'https://gitlab.com/byronyang1/gameshop_programming_fall_2024',
  },
  {
    image: readingImage,
    title: 'Happy Reading App',
    description: 'An android mobile app that allows for online downloading and parsing of books to read offline',
    link: 'https://gitlab.com/byronyang1/gameshop_programming_fall_2024',
  }

]

function App() {

  return (
    <>
      <NavBar />
      <section className="translate-y-30 md:translate-y-20 px-4 flex flex-col">
        <About />
        <section className="mt-5 scroll-mt-28 md:scroll-mt-20" id="skills">
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
        <section className="mt-5 scroll-mt-28 md:scroll-mt-20 flex flex-col" id="projects">
          <Projects items={projectItems} />
        </section>
        <section className="mt-5 scroll-mt-28 md:scroll-mt-20" id="experiences">
          <h2 className="text-xl font-semibold text-[#e0b3e8] text-center">My Experiences:</h2>
          <section className="md:flex md:flex-row md:place-content-evenly gap-4">
            <ExperienceDisplay title="IT Project Manager"
                               company="InterRent REIT"
                               list={["Software development integration projects", "Integrated Smart Building Thermostat with Data Warehouse software with custom python API", "Integrated Cloud-based HCM and Expense system", "Consolidation of financial information for SaaS solutions for executive presentation", "Helpdesk tasks"]}
                               timespan="06/2024 - 08/2024"
                               image={irentImage}/>
            <ExperienceDisplay title="IT Help Desk Student Co-op"
                               company="InterRent REIT"
                               timespan="07/2025 - 08/2025"
                               list={["3rd most valuable tech employee", "Troubleshoot and reconfigure laptops for windows Autopilot", "Upgraded Company workstations", "Performed offsite device installations and repairs"]}
                               image={irentImage}/>
          </section>
        </section>
      </section>
    </>
  )
}

export default App;
