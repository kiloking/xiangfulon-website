import React from 'react'
import MenuOne from './Components/MenuOne'
function AboutTwo() {
  return (
    <div 
      className='w-full flex flex-col md:flex-row justify-between items-center'
    >
      <div 
        className='w-full md:w-1/2 h-[70vh] md:h-screen overflow-y-auto px-10 py-16 bg-center bg-no-repeat bg-cover'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
      >
        <MenuOne />
        <div className='text-[#012c48] text-xl font-bold py-6'>一座會思考的建築</div>
        <div className=' leading-10'>
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


          
        </div>
      </div>
      <div 
        className='w-full md:w-1/2 h-[30vh] md:h-screen bg-cover bg-center bg-no-repeat'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/aboutbg-2.png' })`}}
      ></div>
    </div>
  )
}

export default AboutTwo