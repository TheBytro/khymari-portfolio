import 'react-slideshow-image/dist/styles.css';
import { Fade } from "react-slideshow-image";

export function slideshowDisplay({items}) {
  return (
    <div className="slide-container">
      <h2 className="text-xl font-semibold text-[#e0b3e8] text-center mb-4">My Projects:</h2>
      <Fade>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image}/>
            <h3 className="text-l font-semibold text-[#e0b3e8] text-center">{item.title}</h3>
            <p className="text-white">{item.description}</p>
            <a href={item.link} className="text-[#e0b3e8] text-center w-full block">Project Link</a>
          </div>
        ))}
      </Fade>
    </div>
  )
}

