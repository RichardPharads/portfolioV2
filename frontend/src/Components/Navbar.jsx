import React from 'react'
import menu from '../assets/menu.png'
import profile from '../assets/profile.jpg'


function Navbar() {

  const toggle = () =>{
    alert("toggled")
  }
  return (
    <div className='w-full h-20 m-auto flex items-center fixed top-[10px]  '>
      <div className='w-full h-40 bg-[#1D1D1D] absolute blur-sm'></div>
      <div className='w-full h-12 py-8 bg-[#343333] m-auto absolute'>

        <div className='px-4 max-w-3xl h-full m-auto flex items-center justify-between'>
          <div className='flex items-center gap-[18px]'>
            <div className='w-10 h-10 rounded-full'>
              <img className='rounded-full w-full h-full' src={profile} alt="" />
            </div>
            <span>Richard Parado</span>
          </div>
          <div className='w-10 h-10 rounded-sm cursor-pointer ' onClick={toggle}>
            <img src={menu} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar