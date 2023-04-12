import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import {news} from './Components/NewsItems'
import { FaArrowLeft } from "react-icons/fa";
import { Helmet } from 'react-helmet';
function WatchArticle() {
  const {articleid} = useParams()
  const [data ,setData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0) 
  const currentEnv = 'development'
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
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
        <meta property="og:title" content="祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商" />
        <meta property="og:description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div className='px-10 pt-20 '>
        <Link to="/news-2"><FaArrowLeft size="36px" color="black"/></Link>
      </div>
      {data ?
        <div className='px-10 py-14 flex flex-col md:flex-row gap-20'>
          <div className='w-full md:w-1/2 flex flex-col gap-5 overflow-y-auto  max-h-[520px] p-3'>
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
          <div className='w-full md:w-1/2'>
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