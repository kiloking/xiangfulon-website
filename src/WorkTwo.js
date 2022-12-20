import React from 'react'
import {oldProjects} from './Components/WorkItems'
import { Link  } from "react-router-dom";
import MenuTwo from './Components/MenuTwo'
function WorkTwo() {



  const newArray = [...oldProjects].sort((a,b)=> a.open_year - b.open_year)
  
  return (
    <div 
      className='w-full bg-[#F9F9F9] h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg02.png' })`}}
    >
      <div className=' absolute bottom-0 left-10'>
        <img src={process.env.PUBLIC_URL+'/images/worktwo_pic01.png'} alt="" />
      </div>
      <div className='px-10 pt-16 h-screen overflow-y-auto scroll-smooth'>
        <MenuTwo />
        <div className='flex'>
          <div className='w-2/5 relative'>
            <div className='text-[#385173] font-bold'>祥富龍/祥旭龍實業 <br /> 歷年建築軌跡</div>

          </div>
          <div>
            <ul>
              {newArray.map((item,index)=>{
                return(
                  <li key={'two'+index}  className=" ">
                    <Link className='flex items-center mr-3 gap-5 mb-7 transition-all hover:brightness-125' to={"/watchproject/"+item.project_code}>
                      <div className='w-8 text-[#669BBC] font-bold'>{item.open_year}</div>
                      <div className='flex'>
                        <div className='flex  items-center gap-5'>
                          <img src={process.env.PUBLIC_URL+'/images/oldworks/'+item.year_cover_image} alt="" />
                          <div>
                            <div className='text-[#385173] font-medium'>{item.title}</div>
                            <div className='text-sm text-zinc-700'>{item.address}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
        
      </div>

    </div>
  )
}

export default WorkTwo