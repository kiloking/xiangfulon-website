import React from 'react'
import MenuOne from './Components/MenuOne'
import { motion } from "framer-motion";
import { Helmet } from 'react-helmet';
function AboutTwo() {
  return (
    <div 
      className='w-full flex flex-col md:flex-row justify-between items-center'
    >
      <Helmet>
        <title>祥富龍實業/祥旭龍實業|建設公司|三蘆在地建商</title>
        <meta name="description" content="【祥富龍實業/祥旭龍實業-三重蘆洲專業建商】深耕三重蘆洲地區，以品 質與信譽打造優質住宅。自土木營建基層打底深耕，我們傳承了對建築的愛，代代以 建築專業傳遞美好，不僅接棒對建築的熱忱，更將創造加倍宏遠達觀的未來。" />
      </Helmet>
      <div 
        className='w-full md:w-1/2  md:h-screen  px-10 py-16 bg-center bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
      >
        <MenuOne />
        <div className='text-[#012c48] text-2xl font-bold py-6 '>一座會思考的建築</div>
        <motion.div
         initial={{ opacity: 0,y:'10' }}
         animate={{ opacity: 1,y:0 }}
         transition={{
           ease: "easeInOut",
           duration: .6,
           delay: 0.1,
         }}
         className=' leading-10 text-[20px]'>
          建築就像一本打開的書， <br /> 
          從中你能看到 一座城市的抱負。<br /> 
          <b>---芬蘭裔美籍建築師埃羅• 沙里寧(EeroSaarinen)</b>
          <br /><br /> 
          <div className='text-[#012c48] '>
          建築織就城市豐景<br /> 
          提供城市生活舞台<br /> 
          更重要的是 ，人們美好的回憶 ，都在這裡展開 。<br /> 
          </div>
          
          <br /> 
          祥富龍/祥旭龍實業：「客戶成家的笑容，是身為建築人最感動的事。」<br /> 
          透過打磨精鑄，創造理想生活，用堅定不移的初衷，視建築為永遠的志業，並以當一輩子的建築人為榮。


          
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
        className='w-full md:w-1/2 h-[60vh] md:h-screen bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/aboutbg-2.png' })`}}
      ></motion.div>
    </div>
  )
}

export default AboutTwo