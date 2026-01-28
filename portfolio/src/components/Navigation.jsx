import {useState} from "react";

export default function Nav() {
  const [selected, setSelected] = useState("nav_about");
  
  const handleClick = (e) => {
    if (selected === e.target.parentElement.id) return;
    if (e.target.parentElement.tagName !== "LI") return;
    setSelected(e.target.parentElement.id);
  }
  
  return (
    <header className="w-full bg-[#0f0015] text-white py-4 fixed flex top-0 left-0 z-50 shadow-xl">
      <h1 className="flex-4 px-4 text-2xl font-semibold text-[#e0b3e8]">Khymari Sandy</h1>
      <ul className="flex flex-wrap flex-row gap-4 justify-end px-4 items-center" onClick={handleClick}>
        <li id="nav_about" className={selected === "nav_about" && "text-[#d08dd1]"}><a href="#about">About Me</a></li>
        <li id="nav_skills" className={selected === "nav_skills" && "text-[#d08dd1]"}><a href="#skills">My Skills</a></li>
        <li id="nav_projects" className={selected === "nav_projects" && "text-[#d08dd1]"}><a href="#projects">My Projects</a></li>
        <li id="nav_experience" className={selected === "nav_experience" && "text-[#d08dd1]"}><a href="#experiences">My Experience</a></li>
      </ul>
    </header>
  );
}