import React,{useState,useEffect} from 'react'
import SwipeWorkItems from './Components/SwipeWorkItems'
import {oldProjects} from './Components/WorkItems'
import { MenuItems02} from './Components/ＭenuItems'
import { Link  } from "react-router-dom";
import { motion } from "framer-motion";
import MenuTwo from './Components/MenuTwo'
import { Helmet } from 'react-helmet';
function WorkTwo_Card() {
  const [sortedData , setSortedData] = useState(null)
  const filterThenSortData = () => {
    oldProjects.sort(function(a, b) {
      return b.open_year - a.open_year;
    });
    let dataSorted = oldProjects.filter(function(item) {
      return item.type === 'hot';
    });
    setSortedData(dataSorted)
  }
  useEffect(()=>{
    filterThenSortData()
  },[])

  return (
    <div className='w-full h-screen bg-[#F9F9F9] '>
      <Helmet>
        <title>三重建案集英堡六期 | 優質住宅推薦 | 祥富龍實業/祥旭龍實業 - 三重在地 建商|新北市三重區建案</title>
        <meta name="description" content="【集英堡六期-三重區頂級建案】位於新北市三重區集英路17號，由知名建 商祥富龍實業打造。規劃坪數42.59-66.72坪，擁有11層樓高+B2F，共40戶+40車。 優質建築設計由巨仲建築師事務所操刀，施工營造由振城營造股份有限公司負責。20 14年推出，成為三重建案的矚目焦點。集英堡六期，您在三重區的最佳選擇，品質與 信譽保證。" />
        <meta property="og:title" content="祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商" />
        <meta property="og:description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div className='px-10 py-16'>
        <MenuTwo />
        <div className='w-full grid grid-cols-1 md:grid-cols-4 gap-6'>
          { sortedData ?
            sortedData.map((item,index)=>{
              return(
                <Link 
                  key={'a0'+index}
                  to={"/watchproject/"+item.project_code}
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
                    <div className='w-full'><img src={process.env.PUBLIC_URL+'/images/oldworks/'+ item.cover_image} alt="" className='w-full' /></div>
                    <div className='text-xl  font-bold text-zinc-500 mt-3 mb-3'>{item.open_year} {item.title}</div>
                  </motion.div>

                </Link>
              )
            }) 
            : <div>Loading</div>
          }
        </div>
      </div>

    </div>
 
  )
}

export default WorkTwo_Card