import React from 'react'

function About() {
  return (
    <div className=' m-auto max-w-full border w-[350px]'>
        <h2 className='font-semibold text-2xl mb-7 '>About Me</h2>
        <div className='grid gap-3.5 text-[15px] font-light text-[#A2A1A1]'>
            <p>I’m a developer passionate about creating modern user interfaces and solving problems through successful digital products.</p>
        <p className=''>I'm currently a 4th-year student at ICCT - Main Campus, aspiring to become a full-stack developer. My primary expertise lies in the MERN stack (MongoDB, Express.js, React.js, and Node.js), and I'm always eager to explore new technologies.</p>
        <p>In my free time, I enjoy watching courses on Udemy and practicing modern web design using Figma and Adobe XD to refine my UI/UX skills.</p>
        <p>Currently, I’m working on a project focused on local AI integration using Ollama, combining Flask and React to build intelligent applications.
        Feel free to connect with me! 🚀</p>
        </div>
    </div>
  )
}

export default About