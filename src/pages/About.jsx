function About() {
  return (
    <div className='flex flex-col min-h-screen justify-center items-center'>
      {/* headings and paragraphs  */}
      <div className='flex flex-col text-center gap-6'>
        <h1 className='text-green-500 font-bold pt-18 uppercase text-3xl'>About Me</h1>
        <p className='text-lg text-justify px-4 text-gray-500' >Hello , i am MLBSL,a professiona Full Stack Developer from Nepal. I enjoy building responsive and mobile friendly websites.</p>
        <p className='text-gray-500 text-justify text-lg px-4'>I love learning new technologies,solving problems and creating modern solutions.</p>

      </div>


      {/* to list skills */}
      <div className="border-gray-300 border-2 p-4 sm:m-10 m-4 px-10 py-6">  
        <h1 className="text-center text-green-500 sm:text-2xl text-xl font-semibold m-3">My Skills and Knowledge</h1>
        <ul className='grid sm:grid-cols-2 grid-cols-1 gap-4'>
          <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold text-sm'>HTML CSS & JAVASCRIPT</li>
          <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold text-sm'>REACT AND TAILWIND CSS</li>
          <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold text-sm'>NODE JS</li>
          <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold text-sm'>MONGODB</li>
          <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold text-sm'>POSTGRESQL</li>
          <li className='bg-gray-300 px-10 py-2 text-gray-600 font-semibold text-sm'>Git and GitHub</li>
        </ul>
      </div>
    </div>
  )
}

export default About