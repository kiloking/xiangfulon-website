import React from 'react'
import { MenuItems03} from './Components/ＭenuItems'
import {newProjects} from './Components/WorkItems'
import MenuThree from './Components/MenuThree'
function NewsOne() {
  return (
    <div 
      className='w-full bg-[#F9F9F9] bg-cover bg-center bg-no-repeat'
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
    >
      <div className='px-10 py-16'>
        <MenuThree />
        <div className=''>
          {
            newProjects.map((item,index)=>{
              const{title,map_image,address,land_size,house_size,build_floor,build_count,build_design,build_create,build_openspace,build_env,start_date} = item
              return(
                <div className='flex gap-6 mb-20'>
                  <div className='flex gap-5 w-2/3'>
                    {item.images.map((data,i)=>{
                      return(
                        <div className=''><img src={process.env.PUBLIC_URL+'/images/newworks/'+data} alt="" className='p-4 bg-white shadow-md' /></div>
                      )
                    })}
                  </div>
                  <div className='flex w-2/3 gap-5 items-center'>
                    <ul className='w-1/2 leading-7 text-zinc-800'>
                      {title            && <div className='text-lg text-[#003049] font-bold mb-4'>{title}</div> }
                      {address          && <div>基地位置 / {address}</div>}
                      {land_size        && <div>基地面積 / {land_size}</div>} 
                      {house_size       && <div>規劑坪數 / {house_size}</div>} 
                      {build_floor      && <div>規劃樓層 / {build_floor}</div>}
                      {build_count      && <div>規劃戶車 / {build_count}</div>} 
                      {build_design     && <div>建築設計 / {build_design}</div>}
                      {build_create     && <div>施工營造 / {build_create}</div>}
                      {build_openspace  && <div>公共空間 / {build_openspace}</div>} 
                      {build_env        && <div>景觀設計 / {build_env}</div>} 
                      {start_date       && <div>開工日期 / {start_date}</div>} 
                      <div>完工日期 / </div>
                    </ul>
                    <div>
                      <img src={process.env.PUBLIC_URL+'/images/newworks/'+ map_image} alt="" />
                    </div>

                  </div>
                  

                </div>
              )
            })
          }
        </div>
      </div>

    </div>
  )
}

export default NewsOne