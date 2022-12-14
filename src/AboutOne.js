import React from 'react'
import { MenuItems01} from './Components/ＭenuItems'
function AboutOne() {
  return (
    <div 
      className='w-full flex justify-between items-center'
    >
      <div 
        className='w-1/2 h-screen px-10 py-16'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
      >
        <div className='py-12'>
          <ul className='flex gap-6'>
            {MenuItems01.map((item,index)=>{
              return(
                <li>{item.title}</li>
              )
            })}
            
          </ul>
        </div>
        <div className='text-[#012c48] text-xl font-bold py-6'>建築初衷 源起</div>
        <div className=' leading-10'>
          <b>一日建築人，終生建築魂</b><br /><br /> 
          從一磗 一瓦到一宅 一景，祥富龍/祥旭龍寊業專注打造幸福家園。<br /> 
          堅持以突破與創新，結合工藝細節，創造宏觀國際視野， <br /> 
          秉持樸寊低調的初衷，將誠信奉為圭臬。<br /> 
          春 、夏 、秋 、冬 <br /> 
          走通豐收盈滿的一甲子<br /> 
          <br /> 
          自土木營建基層打底深耕，我們傳承了對建築的愛 ， <br /> 
          代代以建築專業傳遞美好，不僅接棒對建築的熱忱 ， <br /> 
          更將創造加倍宏遠達觀的未來 。
        </div>
      </div>
      <div 
        className='w-1/2 h-screen bg-center bg-no-repeat'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/about/aboutbg-1.png' })`}}
      ></div>
    </div>
  )
}

export default AboutOne