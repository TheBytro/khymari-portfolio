import { useState } from 'react'
import NavBar from './components/Navigation.jsx'
import {aboutme as About} from "./components/Description.jsx";
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <section className="transform translate-y-20 px-4">
        <About />
      </section>
    </>
  )
}

export default App
