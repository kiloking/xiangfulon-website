import React from 'react'
import { MenuItems03} from './Components/ＭenuItems'
import {news} from './Components/NewsItems'
import MenuThree from './Components/MenuThree'
import { Link  } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
function NewsTwo() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat min-h-screen'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
    >
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
        <meta property="og:title" content="祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商" />
        <meta property="og:description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div className='px-10 py-16'>
        <MenuThree />
        <div className='flex flex-col md:flex-row gap-8 justify-start break-words items-start'>
          {
            news.map((item,index)=>{
              const{id,title,source,news_years,news_date,cover_image,content} = item
              return(
                <motion.div 
                  initial={{ opacity: 0,y:'10' }}
                  animate={{ opacity: 1,y:0 }}
                  transition={{
                    ease: "easeInOut",
                    duration: .6,
                    delay: 0.3 * index,
                  }}
                  key={'news'+id} className=' gap-10 mb-20 w-full  md:w-1/3'>
                  <Link to={"/watcharticle/"+id} className=' gap-6 w-full '>
                    <div className='mb-7'>
                      <img src={process.env.PUBLIC_URL+'/images/news/'+cover_image} alt=""  className='w-full'/>
                    </div>
                    <div className='flex items-center gap-6 reak-words pr-6'>
                      <div className='text-[#003049] '>
                        <div className='text-lg tracking-wider font-bold'>{news_date}</div>
                        <div className='text-base font-bold'>{news_years}</div>
                      </div>
                      <div className='text-2xl font-bold'>
                        {title}
                      </div>
                    </div>
                    

                  </Link>
                </motion.div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NewsTwo