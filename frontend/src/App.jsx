import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Education from './Components/Education'

function App() {
  return (
    
    <div className='font-[Roboto]  border bg-primary text-white'>
      <Navbar/>
      <div className='px-[10%]'>
      <Hero/>
      <About/>
      {/* <Education/>  */}
      </div>
    </div>
  )
}

export default App