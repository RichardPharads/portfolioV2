import React from 'react'


function EducationCard({image , school , year , level}) {


  return (
    
    <div className='border-1 py-2 px-4 rounded-[6px] border-[#00ff00] w-[176px] h-[110px]' >
    <h3 className='text-[12px] mb-2 font-medium'>{level} Education</h3>
    <div className='flex text-[10px] gap-2.5 '>

        <div className='w-[30px] h-[30px] rounded-full'>
           <img className='rounded-full w-full h-full' src={image} alt="" />
        </div>

        <ul className='flex flex-col justify-between w-[100px] h-16'>
            <p className='text-[#A2A1A1]'>{school}</p>
            <p className='font-extralight italic'>S.Y {year}</p>
        </ul>
    </div>
    </div>
  )
}

export default EducationCard