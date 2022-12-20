import React from 'react'
import { MenuItems03} from './Components/ＭenuItems'
import {news} from './Components/NewsItems'
import MenuThree from './Components/MenuThree'
import { Link  } from "react-router-dom";
function NewsTwo() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
    >
      <div className='px-10 py-16'>
        <MenuThree />
        <div className='flex gap-6 justify-start break-words items-start'>
          {
            news.map((item,index)=>{
              const{id,title,source,news_years,news_date,cover_image,content} = item
              return(
                <Link to={"/watcharticle/"+id} className=' gap-6 mb-20 w-1/3'>
                  <div className='mb-7'>
                    <img src={process.env.PUBLIC_URL+'/images/news/'+cover_image} alt=""  className='max-w-full'/>
                  </div>
                  <div className='flex items-center gap-6 reak-words pr-6'>
                    <div className='text-[#003049] '>
                      <div className='text-lg tracking-wider'>{news_date}</div>
                      <div className='text-sm'>{news_years}</div>
                    </div>
                    <div className='text-xl font-bold'>
                      {title}
                    </div>
                  </div>
                  

                </Link>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NewsTwo