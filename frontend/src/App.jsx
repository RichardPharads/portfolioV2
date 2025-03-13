import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Education from './Components/Education'

function App() {
  return (
    
    <div className='font-[Roboto] '>
      <Navbar/>
      <div className='w-[362px] m-auto grid gap-16 '>
      <Hero/>
      <About/>
      <Education/>
      </div>
    </div>
  )
}

export default App