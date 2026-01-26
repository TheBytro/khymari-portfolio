import {smallImageDisplay as SmallDisplay} from "./components/AccentDisplayWithImage.jsx";
import NavBar from './components/Navigation.jsx'
import {aboutme, aboutme as About} from "./components/Description.jsx";
import './App.css'
import backendImage from './assets/backend.png';
import codingImage from './assets/programming.png';

function App() {

  return (
    <>
      <NavBar />
      <section className="translate-y-20 px-4 flex flex-col">
        <About />
        <section className="mt-5">
          <h2 className="text-xl font-semibold text-[#e0b3e8] text-center">My Skills:</h2>
          <section className="flex flex-row place-content-evenly flex-wrap">
            <SmallDisplay title="Back-End Development"
                          list={["Flask", "Node.js", "PostgreSQL", "Oracle SQL", "MongoDB", "REST APIs", "AWS", "Express", "Azure"]}
                          image={backendImage}/>
            <SmallDisplay title="Programming & Concepts"
                          list={["Python", 'C#', 'Java', 'Lua', 'Kotlin', 'Bash', 'OOP', 'Entity Framework', 'Agile', 'DevOps']}
                          image={codingImage}/>
            <SmallDisplay title="Tools" list={['Git', 'Jira', 'Gitlab CI (Pipelines)', 'GitHub']} image={backendImage}/>
            <SmallDisplay title="Other Tech Experience" list={['Computer Building', 'Computer Repair', 'Raspberry Pi']}
                          image={backendImage}/>
          </section>
        </section>
      </section>
    </>
  )
}

export default App
