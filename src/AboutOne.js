import React,{useState} from 'react'
import MenuOne from './Components/MenuOne'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
function AboutOne() {
  return (
    <div 
      className='w-full flex flex-col md:flex-row justify-between items-center '
    >
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
        <meta property="og:title" content="祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商" />
        <meta property="og:description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div 
        className='w-full md:w-1/2  md:h-screen px-10 py-16 bg-center bg-no-repeat bg-cover '
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
      >
        <MenuOne />
        <div className='text-[#012c48] text-2xl font-bold py-6'>建築初衷 源起</div>
        <motion.div 
          initial={{ opacity: 0,y:'10' }}
          animate={{ opacity: 1,y:0 }}
          transition={{
            ease: "easeInOut",
            duration: .6,
            delay: 0.1,
          }}
          className=' leading-10 text-[20px]'>
          <b>一日建築人，終生建築魂</b> <br /><br /> 

          從一磚一瓦到一宅一景，祥富龍/祥旭龍實業專注打造幸福家園。<br /> 
          堅持以突破與創新，結合工藝細節，創造宏觀國際視野，<br /> 
          秉持樸實低調的初衷，將誠信奉為圭臬。<br /> 
          春、夏、秋、冬<br /> 
          走過豐收盈滿的一甲子<br /> 
          <br /> 
          自土木營建基層打底深耕，我們傳承了對建築的愛，<br /> 
          代代以建築專業傳遞美好，不僅接棒對建築的熱忱，<br /> 
          更將創造加倍宏遠達觀的未來。
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          ease: "easeInOut",
          duration: .6,
          delay: 0.1,
        }}
        className='w-full md:w-1/2 h-[60vh] md:h-screen bg-center bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/aboutbg-1.png' })`}}
      ></motion.div>
    </div>
  )
}

export default AboutOne