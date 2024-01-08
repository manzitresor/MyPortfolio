import { projects } from "../data/data"
function Projects() {
  return (
    <>
    <div name='work' className='w-full md:h-full text-gray-300 bg-[#0a192f] md:pl-32'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-2 border-white text-white'>
            Projects
          </p>
          <p className='py-6'> Check out some of my recent work</p>
        </div>

    {/* container for projects */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 cursor-pointer">
              
              {/* Gird Item */}
              {projects.map((item, index) => (
      <div
        key={index}
        style={{ backgroundImage: `url(${item.image})` }}
        className="shadow-lg shadow-[#040c16] group container rounded-md 
                  flex justify-center text-center items-center mx-auto content-div "
      >
    {/* Hover effect for images */}
    <div className="opacity-0 group-hover:opacity-100 ">
      <span className="text-2xl font bold text-white tracking-wider ">
        {item.title}
      </span>
      <div className="pt-8 text-center ">
        {/* eslint-disable-next-line */}
        <a href={item.source} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Code
          </button>
        </a>
        {/* eslint-disable-next-line */}
        <a href={item.demo} target="_blank">
          <button
            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
          >
            Live
          </button>
        </a>
      </div>
    </div>
  </div>
))}


</div>
      </div>
      
    </div>
   
      
    </>
  )
}

export default Projects;
