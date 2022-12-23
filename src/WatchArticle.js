import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import {news} from './Components/NewsItems'
import { FaArrowLeft } from "react-icons/fa";
function WatchArticle() {
  const {articleid} = useParams()
  const [data ,setData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0) 
  const currentEnv = process.env.NODE_ENV
  // development  production
  const PUBLICURL = currentEnv === 'development' ?  process.env.PUBLIC_URL : '..'
  useEffect(()=>{
    const currentData = news.find((item)=>{
      return item.id === articleid
    })
    setData(currentData)
  })
  return (
    <div className='w-full h-screen bg-cover bg-center bg-no-repeat '
      style={{backgroundImage: `url(${PUBLICURL+'/images/blockbg.png'})`}}
    >
      <div className='px-10 pt-20 '>
        <Link to="/news-2"><FaArrowLeft size="36px" color="black"/></Link>
      </div>
      {data ?
        <div className='px-10 py-14 flex gap-20'>
          <div className='w-1/2 flex flex-col gap-5 overflow-y-auto  max-h-[520px] p-3'>
            <div className='flex gap-4 items-center'>
              <div className='text-[#003049] '>
                <div className='text-lg tracking-wider'>{data.news_date}</div>
                <div className='text-sm'>{data.news_years}</div>
              </div>
              <div className='text-xl font-bold'>
                {data.title}
              </div>
            </div>
            
            <div className=' break-words whitespace-pre-wrap  '>
              <div className=''>
                {data.content}
              </div>
              
            </div>
          </div>
          <div className='w-1/2'>
            <img src={PUBLICURL+'/images/news/'+data.article_image } alt=""  className='max-w-full' />
            <div>{data.source}</div>
          </div>
        </div>
      : null

      }
    </div>
  )
}

export default WatchArticle