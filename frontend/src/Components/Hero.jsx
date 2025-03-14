import React from 'react'
import human from '../assets/human.png'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import instagram from '../assets/instagram.png'

function Hero() {
  return (
    <div className='py-8 px-6 rounded-3xl bg-[#212121] hover:bg-[#2b2b2b] duration-400 mt-36'>
        <h1 className='text-4xl text-center font-light '>UI/UX and Fullstack Developer</h1>
        <div className='flex justify-between flex-col-reverse gap-10'>

            <div className='flex flex-col justify-between gap-8 items-center'>
                <h3 className='text-[13px] font-light text-center max-w-[200px] text-[#A2A1A1]'>Hi , my name is Richard , Aspiring Full-Stack Developer in the Philippines</h3>
                
                    <ul className='flex justify-center *:w-6 *:h-6 gap-2'>
                        <img src={github} alt="" />
                        <img src={linkedin} alt="" />
                        <img src={instagram} alt="" />
                    </ul>
                
            </div>
            <div className='w-[120px] m-auto'>
                <img className='w-full' src={human} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero