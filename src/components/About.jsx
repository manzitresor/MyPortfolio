import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

function About() {
  return (
    <>
    <div name='home' className='w-full h-screen bg-[#0a192f] md:pl-32'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'>
          Manzi Tresor
        </h1>
        <h2 className='text-4xl sm:text-5xl font-bold text-[#8892b0]'>
          I am a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
           I am  more passionate about solving issues and developing software solutions.
           Stacks: JavaScript, React. open to new opportunity.
        </p>
        <div>
        <Link to='work' smooth={true} duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#333333] hover:border-[#333333]'>
         
            View Work
            
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3'/>
            </span>
          </button>
          </Link>
        </div>
        </div>
    </div>
  
      
    </>
  )
}

export default About
