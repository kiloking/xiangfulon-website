import React from 'react'
import SwipeWorkItems from './Components/SwipeWorkItems'
import {oldProjects} from './Components/WorkItems'
import { MenuItems02} from './Components/ＭenuItems'
function WorkOne() {
  return (
    <div className='w-full h-screen bg-[#F9F9F9] '>
      <div className='px-10 py-16'>
        <div className='py-16 '>
          <ul className='flex gap-6'>
            {MenuItems02.map((item,index)=>{
              return(
                <li>{item.title}</li>
              )
            })}
            
          </ul>
        </div>
        <SwipeWorkItems  data={oldProjects}/>
      </div>

    </div>

  )
}

export default WorkOne