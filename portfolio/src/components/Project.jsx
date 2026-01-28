import 'react-slideshow-image/dist/styles.css';
import { Fade } from "react-slideshow-image";

export function slideshowDisplay({items}) {
  return (
    <div className="slide-container">
      <h2 className="text-xl font-semibold text-[#e0b3e8] text-center mb-4">My Projects:</h2>
      <Fade>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex justify-center">
              <img src={item.image}/>
            </div>
            <h3 className="text-l font-semibold text-[#e0b3e8] text-center">{item.title}</h3>
            <p className="text-white text-center">{item.description}</p>
            <div className="flex justify-center">
              <a href={item.link} className="text-[#e0b3e8] block underline">Project Link</a>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  )
}

