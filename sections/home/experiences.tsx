export default function Experiences() {
  return (
    <div className=" pb-4 ">
      <h2>Experiences</h2>
      <div className="bg-[#ffffff40] p-[16px] rounded ">
        <div className="gap-[8px] flex flex-col md:flex-row md:items-center ">
          <div className="gap-[8px] flex w-full flex-col md:flex-row md:items-center">
            <div className="flex">
              <div className="py-[4px] text-[20px] font-600 gap-[8px] flex items-center">
                <span className="bg-[#ffffff40] h-[20px] w-[20px] text-[18px] flex items-center justify-center rounded p-1 transition-all hover:bg-opacity-70">
                  #1
                </span>
                <span>Efilli Yazılım</span>
              </div>
              <div className="text-[12px] bg-red-600 px-[4px] py-[2px] ml-[8px] my-auto rounded bg-opacity-40 text-white transition-all transition-all hover:bg-opacity-100 hover:bg-opacity-70">
                Engineer
              </div>
            </div>
            <div className="text-[13px] md:ml-auto">2023 August - Present</div>
          </div>
        </div>
        <div className="py-[8px] font-500 transition-all tracking-[2px] hover:tracking-[3px]">
          Frontend Developer
        </div>
        <div className="gap-[12px] text-[12px] mb-[8px] flex transition-all">
          <div className="bg-green-400 cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">VueJS</div>
          <div className="bg-blue-500 cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">Typescript</div>
          <div className="bg-[#ffffff40] cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">UnoCSS</div>
          <div className="bg-orange-600 cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">CSS</div>
        </div>
        <ul className="font-300 ml-[16px] gap-[8px]  text-[15px] flex flex-col opacity-80 ">
          <li className="hover:shadow-md pl-[16px] my-[8px] rounded pr-1 transition-all border-l-1 border-[#cccccc70]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </li>
          <li className="hover:shadow-md pl-[16px] my-[8px] rounded pr-1 transition-all border-l-1 border-[#cccccc70]">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </li>
          <li className="hover:shadow-md pl-[16px] my-[8px] rounded pr-1 transition-all border-l-1 border-[#cccccc70]">
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum.
          </li>
        </ul>
      </div>
    </div>
  )
}
