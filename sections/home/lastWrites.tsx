export default function LastWrites() {
  return (
    <div className="">
      <h2 className="">Last Writes</h2>
      <div className="gap-[16px] flex flex-col">
        <div className="bg-[#ffffff40] p-[16px] rounded  transition-all hover:shadow-md">          <div className="text-[13px] md:ml-auto">13th August, 2024</div>
          <h4 className="">Example Write   </h4>
          <div className="gap-[8px] text-[12px]">
            <div className="bg-red py-[0.5rem] cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">money</div>
            <div className="bg-blue py-[0.5rem] cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">life</div>
            <div className="bg-yellow py-[0.5rem] cursor-grab rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">motivate</div>
            <div className="bg-green py-[0.5rem] cursor-grab  rounded bg-opacity-20 px-1 transition-all hover:bg-opacity-70">work</div>
          </div>
          <div className="mt-[16px]">
            <p className="line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est ut est
              posuere tincidunt. Donec in est ut est posuere tincidunt. Donec in est ut
              est posuere tincidunt. Donec in est ut est posuere tincidunt. Donec in est
              ut est posuere tincidunt.
            </p>
          </div>
        </div>
        <div className="bg-[#ffffff40] p-[16px] rounded transition-all hover:shadow-md">
          <div className="text-[13px] md:ml-auto">13th August, 2024</div>
          <h4 className="">Example Write #1</h4>
          <div className="gap-[8px] text-[12px] flex transition-all">
            <div className="bg-red cursor-grab transition-all hover:bg-opacity-70">money</div>
            <div className="bg-blue rounded transition-all hover:bg-opacity-70">life</div>
            <div className="bg-yellow bg-opacity-20 transition-all hover:bg-opacity-70">motivate</div>
            <div className="bg-green px-1 transition-all hover:bg-opacity-70">work</div>
          </div>
          <div className="mt-[16px]">
            <p className="line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in est ut est
              posuere tincidunt. Donec in est ut est posuere tincidunt. Donec in est ut
              est posuere tincidunt. Donec in est ut est posuere tincidunt. Donec in est
              ut est posuere tincidunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
