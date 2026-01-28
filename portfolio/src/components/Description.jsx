import photo from '../assets/photo.jpg';
export function aboutme() {
  
  return (
    <section className="flex flex-col lg:flex-row scroll-mt-28 md:scroll-mt-20" id="about">
      <div className="flex mb-4 md:mb-0">
        <img src={photo} alt="Selfie Timeeee" className="aspect-[9/16] max-h-[50svh] flex-2 mr-4 w-40"/>
        <div className="flex-1 text-white md:hidden">
          <h2 className="text-xl font-semibold text-[#e0b3e8]">My Hobbies and Interests:</h2>
          <ul>
            <li>Badminton</li>
            <li>Table Tennis</li>
            <li>PC Building</li>
            <li>Game Development</li>
          </ul>
        </div>
      </div>
      <div className="flex-4 text-white mr-4 mt-4">
        <h2 className="text-xl font-semibold text-[#e0b3e8]">About Me:</h2>
        <p>A full-stack developer pursuing learning and self-improvement through experiences and
          challenges. Delivering optimized and easy-to-use applications putting the client first as well as
          modular code for multi-use appliance</p>
      </div>
      <div className="flex-1 text-white hidden md:block mt-4">
        <h2 className="text-xl font-semibold text-[#e0b3e8]">My Hobbies and Interests:</h2>
        <ul>
          <li>Badminton</li>
          <li>Table Tennis</li>
          <li>PC Building</li>
          <li>Game Development</li>
        </ul>
      </div>
    </section>
  );
}