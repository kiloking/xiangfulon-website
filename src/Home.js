import React,{useState} from 'react'
import SwiperBgImages from './Components/SwiperBgImages'
import homeBannerItem from './homeBannerItem.json'
function Home() {
  const {homeBanner} =homeBannerItem

  return (
    <div className='h-screen'>
      <div>
        <SwiperBgImages imgData={homeBanner}/>
      </div>
      <div className=' absolute left-10 bottom-10 z-30 bg-white w-[330px] p-5 shadow-md'>
        <div className='text-sm my-3 text-[#012c48]'>建築，就是生命的鏡子</div>
        <div className='text-xs text-zinc-600 pb-3 leading-5'>你只需要注視著建築物，就能感受到過去、現在、未來，它觸動著土地的靈魂，它們就是社會的倒影。一 貝聿銘</div>
      </div>
      <div className='bg-[#ffffffee] text-[#012c48] w-full h-12 flex justify-end items-center pr-5 text-sm fixed bottom-0 z-10'>
        祥龍兆豐年 • 幸福安心居
      </div>
    </div>
  )
}

export default Home