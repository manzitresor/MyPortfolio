import { skills } from "../data/data"

function Skills() {
  return (
    <>

    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300 md:pl-32'>
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-2 border-white text-white'>Skills</p>
              <p className='py-4'> These are the technologies I have worked with</p>
          </div>
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            {skills.map((item)=>(
               <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500' key={item.id}>
               <img className='w-20 mx-auto' src={item.icon} alt="HTML icon" />
               <p className='my-4'>{item.skill}</p>
              </div>

            ))}
             
              </div>
       </div>

    </div>
   
    </>
  )
}

export default Skills
