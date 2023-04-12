import React,{useState} from 'react'
import SwipeWorkItems from './Components/SwipeWorkItems'
import {urbanDevProjects} from './Components/WorkItems'
import { MenuItems02} from './Components/ＭenuItems'
import { Link  } from "react-router-dom";
import { motion } from "framer-motion";
import MenuThree from './Components/MenuThree';
import { Helmet } from 'react-helmet';
function NewsThree_Card() {
  const [sortedData , setSortedData] = useState(null)
  const filterThenSortData = () => {
    urbanDevProjects.sort(function(a, b) {
      return b.open_year - a.open_year;
    });
    let dataSorted = urbanDevProjects.filter(function(item) {
      return item.type === 'hot';
    });
    setSortedData(dataSorted)
  }
  return (
    <div className='w-full h-screen bg-[#F9F9F9] '>
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div className='px-10 py-16'>
        <MenuThree />
        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-6'>
          { urbanDevProjects ?
            urbanDevProjects.map((item,index)=>{
              return(
                <div 
                  key={'a0'+index}
                  className={'flex flex-col justify-start items-start pb-1 transition-all duration-1000 w-full hover:brightness-110'} 
                >
                  <motion.div 
                  initial={{ opacity: 0,y:'10' }}
                  animate={{ opacity: 1,y:0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 0.1 * index,
                  }}
                  className='border p-3 shadow  w-full'>
                    <div className='w-full'><img src={process.env.PUBLIC_URL+'/images/urbandev/'+ item.cover_image} alt="" className='w-full' /></div>
                    <div className='text-xl  font-bold text-zinc-500 mt-3 mb-3'>{item.open_year} {item.title}</div>
                  </motion.div>

                </div>
              )
            }) 
            : <div>Loading</div>
          }
        </div>
      </div>

    </div>
 
  )
}

export default NewsThree_Card