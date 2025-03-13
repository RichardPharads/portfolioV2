import React from 'react'

import EducationCard from './EducationCard'
import datas from '../data/educationData.js'

function Education() {
  return (
    <div className='grid grid-cols-2 grid-rows-2 gap-[10px] items-center'>
        <div className='w-[176px]  '>
            <span className='text-sm text-[#A2A1A1]'>my</span><br />
            <span className='text-2xl font-semibold'>Education <br />Background</span>
        </div>

        

        {   
            datas.map((data , key) =>(
              <div className="flex flex-wrap gap-4">
                <EducationCard key={data.id} school={data.school} year={data.year} image={data.image} level={data.level}/>
               </div> 
            ))
           
        }
  
        
    </div>
  )
}

export default Education