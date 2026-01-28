export function smallImageDisplay({image, list, title}) {
  const items = list.map(item =>
    <li className="basis-45">{item}</li>
  )

  return (
    <section className="flex flex-col items-center mt-3">
      <h3 className="text-l font-semibold text-[#e0b3e8] text-center translate-y-6">{title}</h3>
      <div className="bg-[#271030] translate-y-8 p-0.5">
        <img src={image} alt={title}/>
      </div>
      <div className="p-px bg-gradient-to-b from-[#6e3682] to-[#a86bbf]">
        <div className="bg-[#271030] p-6 m-0.5">
          <ul className="text-white list-disc flex flex-row flex-wrap mt-2 mb-0">
            {items}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function experienceImageDisplay({image, list, title, company, timespan}) {
  const items = list.map(item =>
    <li className="basis-55 mb-2">{item}</li>
  )

  return (
    <section className="flex flex-col items-center mt-1">
      <h3 className="text-2xl font-semibold text-[#d08dd1] text-center translate-y-7">{company}</h3>
      <h4 className="text-base font-semibold text-[#e0b3e8] text-center translate-y-7">{title}</h4>
      <p className="text-[#d08dd1] font-light text-sm translate-y-7">{timespan}</p>
      <div className="bg-[#271030] translate-y-8 p-0.5">
        <img src={image} alt={title}/>
      </div>
      <div className="p-px bg-gradient-to-b from-[#6e3682] to-[#a86bbf]">
        <div className="bg-[#271030] p-6 m-0.5">
          <ul className="text-white list-disc flex flex-row flex-wrap mt-2 mb-0">
            {items}
          </ul>
        </div>
      </div>
    </section>
  );
}
