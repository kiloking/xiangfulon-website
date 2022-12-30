import React from 'react'
import {oldProjects} from './Components/WorkItems'
import { Link  } from "react-router-dom";
import MenuTwo from './Components/MenuTwo'
import { motion } from "framer-motion";
function WorkTwo() {



  const newArray = [...oldProjects].sort((a,b)=> a.open_year - b.open_year)
  
  return (
    <div 
      className='w-full bg-[#F9F9F9] h-screen overflow-hidden relative bg-center bg-no-repeat bg-cover'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/bg02.png' })`}}
    >
      <div className=' absolute bottom-0 left-10 w-1/5'>
        <img src={process.env.PUBLIC_URL+'/images/worktwo_pic01.png'} alt=""  className='w-full'/>
      </div>
      <div className='px-10 pt-16 h-screen overflow-y-auto scroll-smooth'>
        <MenuTwo />
        <div className='flex flex-col md:flex-row '>
          <div className='w-2/5 relative mb-6 md:mb-0'>
            <div className='text-[#385173] font-bold text-2xl'>祥富龍/祥旭龍實業 <br /> 歷年建築軌跡</div>

          </div>
          <div>
            <ul>
              {newArray.map((item,index,newArray)=>{
                return(
                  <motion.li 
                  initial={{ opacity: 0,x:'20' }}
                  animate={{ opacity: 1,x:0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: 1,
                    delay: 0.3 * index,
                  }}
                  key={'two'+index}  className=" ">
                    <Link className='flex items-center mr-3 gap-5 mb-10 transition-all hover:brightness-125 relative ' to={"/watchproject/"+item.project_code}>
                      
                      <div className='flex flex-col items-center text-lg'>
                        <div className='w-8 text-[#669BBC] font-bold'>{item.open_year}</div>
                        {index !== newArray.length-1 &&
                          <div className=' absolute  h-14 w-[3px] bg-[#385173] top-16'></div>
                        } 
                        
                      </div>
                      
                      <div className='flex'>
                        <div className='flex  items-center gap-5 text-lg'>
                          <img src={process.env.PUBLIC_URL+'/images/oldworks/'+item.year_cover_image} alt=""  className='w-20'/>
                          <div>
                            <div className='text-[#385173] font-medium'>{item.title}</div>
                            <div className='text-base text-zinc-700'>{item.address}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.li>
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