import React from 'react'
import { MenuItems03} from './Components/ＭenuItems'
import {newProjects} from './Components/WorkItems'
import MenuThree from './Components/MenuThree'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
function NewsOne() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
    >
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div className='px-10 py-16'>
        <MenuThree />
        <div className=''>
          {
            newProjects.map((item,index)=>{
              const{title,map_image,address,land_size,house_size,build_floor,build_count,build_design,build_create,build_openspace,build_env,start_date} = item
              return(
                <motion.div 
                  key={'news1'+index}
                  initial={{ opacity: 0,y:'10' }}
                  animate={{ opacity: 1,y:0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 0.5 * index,
                  }}
                className='flex gap-6 mb-20 flex-col md:flex-row'>
                  <div className='flex gap-5 w-full md:w-2/3'>
                    {item.images.map((data,i)=>{
                      return(
                        <div key={'news1img'+i} className='w-1/2'><img src={process.env.PUBLIC_URL+'/images/newworks/'+data} alt="" className='p-4 bg-white shadow-md w-full' /></div>
                      )
                    })}
                  </div>
                  <div className='flex flex-col md:flex-row w-full md:w-2/3 gap-5 items-center'>
                    <ul className='w-full md:w-1/2 leading-10 text-zinc-800 text-lg'>
                      {title            && <div className='text-xl text-[#003049] font-bold mb-4'>{title}</div> }
                      {address          && <div>基地位置 / {address}</div>}
                      {land_size        && <div>基地面積 / {land_size}</div>} 
                      {house_size       && <div>規劃坪數 / {house_size}</div>} 
                      {build_floor      && <div>規劃樓層 / {build_floor}</div>}
                      {build_count      && <div>規劃戶車 / {build_count}</div>} 
                      {build_design     && <div>建築設計 / {build_design}</div>}
                      {build_create     && <div>施工營造 / {build_create}</div>}
                      {build_openspace  && <div>公共空間 / {build_openspace}</div>} 
                      {build_env        && <div>景觀設計 / {build_env}</div>} 
                      {start_date       && <div>開工日期 / {start_date}</div>} 
                      <div>完工日期 / </div>
                    </ul>
                    <div>
                      <img src={process.env.PUBLIC_URL+'/images/newworks/'+ map_image} alt="" />
                    </div>

                  </div>
                  

                </motion.div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NewsOne