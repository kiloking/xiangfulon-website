import React from 'react'
import SwipeWorkItems from './Components/SwipeWorkItems'
import {oldProjects} from './Components/WorkItems'
import { MenuItems02} from './Components/ＭenuItems'
import MenuTwo from './Components/MenuTwo'
function WorkOne() {
  return (
    <div className='w-full h-screen bg-[#F9F9F9] '>
      <div className='px-10 py-16'>
        <MenuTwo />
        <SwipeWorkItems  data={oldProjects}/>
      </div>

    </div>

  )
}

export default WorkOne