import Image from 'next/image'

export default function Resume() {
  return (
    <div className="">
      <h2>Contact Me</h2>
      <div className="bg-[#ffffff40] p-[16px] gap-[16px] font-500 flex rounded">
        <button className="px-[16px] py-[8px] gap-[16px] bg-blue flex flex cursor-pointer items-center rounded border-none bg-opacity-[75%] transition-all hover:bg-opacity-[85%] active:bg-opacity-100">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
            >
              <path
                fill="rgb(96 165 250)"
                d="m211.48 35.32l-130.25-23a20 20 0 0 0-23.18 16.22l-29.75 169a20 20 0 0 0 16.22 23.16l130.25 23a20.1 20.1 0 0 0 3.52.31A20 20 0 0 0 198 227.46l29.75-169a20 20 0 0 0-16.27-23.14M175 219.36L52.63 197.75L81 36.64l122.37 21.61ZM91.9 67a12 12 0 0 1 13.9-9.73L173 69.14A12 12 0 0 1 171 93a12.59 12.59 0 0 1-2.1-.18L101.63 80.9A12 12 0 0 1 91.9 67M85 106.39a12 12 0 0 1 13.91-9.73l67.22 11.88a12 12 0 0 1-2.13 23.81a12.5 12.5 0 0 1-2.1-.18l-67.21-11.88a12 12 0 0 1-9.69-13.9m-7 39.39a12 12 0 0 1 13.9-9.73l33.64 5.95a12 12 0 0 1-2.07 23.82a11.63 11.63 0 0 1-2.1-.19l-33.61-5.93A12 12 0 0 1 78 145.78"
              />
            </svg>
          </div>
          <div className="font-500 capitalize text-white">Download Resume</div>
        </button>
        <button className="px-[16px] py-[8px] gap-[16px] bg-[#319795] flex cursor-pointer items-center rounded border-none bg-opacity-[75%] transition-all hover:bg-opacity-[85%] active:bg-opacity-100">
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgb(49 151 149)"
                d="M7 17q-.825 0-1.412-.587T5 15V5q0-.825.588-1.412T7 3h14q.825 0 1.413.588T23 5v10q0 .825-.587 1.413T21 17zm7-4.7L7 7.425V15h14V7.425zm0-2.45L21 5H7zM3 21q-.825 0-1.412-.587T1 19V6.5h2V19h16.5v2zM21 7.35V5H7v2.35V5h14z"
              />
            </svg>
          </div>
          <div className="font-500 capitalize text-white">Send Me a Magical Mail</div>
        </button>
        <button className="px-[16px] py-[8px] gap-[16px] bg-rose flex cursor-pointer items-center rounded border-none bg-opacity-[75%] transition-all hover:bg-opacity-[85%] active:bg-opacity-100">
          <div className="font-500 capitalize text-white">Writes</div>
          <div className="w-[28px] h-[28px] flex items-center justify-center rounded-full bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                fill="rgb(251 113 133)"
                d="M3 21v-2h16V3h2v16q0 .825-.587 1.413T19 21zm12-4q-.825 0-1.412-.587T13 15t.588-1.412T15 13t1.413.588T17 15t-.587 1.413T15 17M5 12v-2h3.6L3 4.4L4.4 3L10 8.6V5h2v7z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  )
}
