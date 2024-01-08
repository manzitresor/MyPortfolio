
function Contact() {
    return (
      <>
      <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4'>
          <form method='POST' action="https://getform.io/f/3bcc84bd-4f45-49c4-97a5-01def5bec034" className='flex flex-col max-w-[600px] w-full'>
              <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-2 border-white text-white'>Contact</p>
                  <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - manzitre@gmail.com</p>
              </div>
              <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required/>
              <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'  required/>
              <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message' required></textarea>
              <button className='text-white border-2 hover:bg-[#333333] hover:border-[#333333] px-4 py-3 my-8 mx-auto flex items-center'>Let us Collaborate</button>
          </form>
      </div>
      </>
    )
  }
  
  export default Contact
  