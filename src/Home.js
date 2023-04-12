import React,{useState} from 'react'
import SwiperBgImages from './Components/SwiperBgImages'
import {homeBanner} from './HomeBannerItem'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
function Home() {

  return (
    <div className='h-screen'>
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
        <meta property="og:title" content="祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商" />
        <meta property="og:description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div>
        <SwiperBgImages imgData={homeBanner}/>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.3,
        }}
        className=' absolute left-5  md:left-10 bottom-10 z-30 bg-white w-11/12 md:w-[400px] p-5 shadow-md'>
        <div className='text-xl md:text-2xl my-3 text-[#012c48]  font-bold'>建築，就是生命的鏡子</div>
        <div className='md:text-lg text-zinc-600 pb-3 leading-6 tracking-wide'>你只需要注視著建築物，就能感受到過去、現在、未來，它觸動著土地的靈魂，它們就是社會的倒影。一 貝聿銘</div>
      </motion.div>
      <div className='bg-[#ffffffee] text-[#012c48] w-full h-12 flex justify-end items-center pr-5 text-lg font-bold fixed bottom-0 z-10'>
        祥龍兆豐年 • 幸福安心居
      </div>
    </div>
  )
}

export default Home