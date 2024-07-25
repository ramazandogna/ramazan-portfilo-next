import Image from 'next/image'

export default function LastWorks() {
  return (
    <div className="">
      <h2>Last Works</h2>
      <div className="bg-[#ffffff40] p-[16px] gap-[16px] flex flex-col rounded">
        <div className="gap-[16px] flex w-full">
          <div className="p-[16px] flex flex-col items-center justify-center rounded text-center border-1 border-[#00000050]">
            <span className="h-[200px] relative block w-full overflow-hidden rounded p-2 border-[#00000050]">
              <Image
                className="hover:rotate-[7.5%] hover:scale-[115%] duration-200 absolute inset-0 h-full w-full transform object-cover transition-all transition-transform "
                alt="project-1"
                src="https://ramazandogna.netlify.app/static/media/pokepoke-app.842253d8182d07091a1b.png"
                width={294}
height={216}
              />
            </span>
            <h4 className="">Pokepoke App</h4>
            <p className="text-[14px] line-clamp-2">
              Pokedex app with PokeAPI. (React, Redux Toolkit, CSS)
            </p>
          </div>
          <div className="p-[16px] flex flex-col items-center justify-center rounded text-center border-[#00000050]">
            <span className="h-[200px] relative block w-full overflow-hidden rounded p-2 border-[#00000050]">
              <Image
                className="hover:rotate-[7.5%] hover:scale-[115%] duration-200 absolute inset-0 h-full w-full transform object-cover transition-all transition-transform "
                alt="project-1"
                src="https://ramazandogna.netlify.app/static/media/pokepoke-app.842253d8182d07091a1b.png"
                width={294}
height={216}
              />
            </span>
            <h4 className="">Pokepoke App</h4>
            <p className="text-14px line-clamp-2">
              Pokedex app with PokeAPI. (React, Redux Toolkit, CSS)
            </p>
          </div>
        </div>
        <div className="gap-[16px] flex w-full">
          <div className="p-[16px] flex flex-col items-center justify-center rounded text-center border-[#00000050]">
            <span className="h-[200px] relative block w-full overflow-hidden rounded p-2 border-[#00000050]">
              <Image
                className="hover:rotate-[7.5%] hover:scale-[115%] duration-200 absolute inset-0 h-full w-full transform object-cover transition-all transition-transform "
                alt="project-1"
                src="https://ramazandogna.netlify.app/static/media/pokepoke-app.842253d8182d07091a1b.png"
                width={294}
height={216}
              />
            </span>
            <h4 className="">Pokepoke App</h4>
            <p className="text-14px line-clamp-2">
              Pokedex app with PokeAPI. (React, Redux Toolkit, CSS)
            </p>
          </div>
          <div className="p-[16px] flex flex-col items-center justify-center rounded text-center border-[#00000050]">
            <span className="h-[200px] relative block w-full overflow-hidden rounded p-2 border-[#00000050]">
              <Image
                className="hover:rotate-[7.5%] hover:scale-[115%] duration-200 absolute inset-0 h-full w-full transform object-cover transition-all transition-transform "
                alt="project-1"
                src="https://ramazandogna.netlify.app/static/media/pokepoke-app.842253d8182d07091a1b.png"
                width={294}
height={216}
              />
            </span>
            <h4 className="">Pokepoke App</h4>
            <p className="text-[14px] line-clamp-2">
              Pokedex app with PokeAPI. (React, Redux Toolkit, CSS)
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
