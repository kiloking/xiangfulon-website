import React,{useState,useEffect} from 'react'
import { useParams, Link } from 'react-router-dom';
import {oldProjects} from './Components/WorkItems'
import { FaArrowLeft } from "react-icons/fa";
function WatchOldProject() {
  const {projectid} = useParams()
  const [data ,setData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0) 

  useEffect(()=>{
    const currentData = oldProjects.find((item)=>{
      return item.project_code === projectid
    })
    setData(currentData)
  })
  return (
    <div className='w-full h-screen bg-cover bg-center bg-no-repeat '
      style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/blockbg.png' })`}}
    >
      <div className='px-10 pt-20 '>
        <Link to="/work-1"><FaArrowLeft size="36px" color="black"/></Link>
      </div>
      {data ?
        <div className='px-10 py-14 flex gap-6 '>
          <div className='w-1/3'>
            <img src={process.env.PUBLIC_URL+"../images/oldworks/"+ data.project_code+'@3x.png'} alt="" className='max-w-full'/>
          </div>
          <ul className='w-1/2 leading-8 text-zinc-800 mt-10'>
            {data.title            && <div className='text-2xl text-[#003049] font-bold mb-4'>{data.title}</div> }
            {data.address          && <div>基地位置 / {data.address}</div>}
            {data.land_size        && <div>基地面積 / {data.land_size}</div>} 
            {data.house_size       && <div>規劑坪數 / {data.house_size}</div>} 
            {data.build_floor      && <div>規劃樓層 / {data.build_floor}</div>}
            {data.build_count      && <div>規劃戶車 / {data.build_count}</div>} 
            {data.build_design     && <div>建築設計 / {data.build_design}</div>}
            {data.build_create     && <div>施工營造 / {data.build_create}</div>}
            {data.build_openspace  && <div>公共空間 / {data.build_openspace}</div>} 
            {data.build_env        && <div>景觀設計 / {data.build_env}</div>} 
            {data.open_year        && <div>推出日期 / {data.open_year}</div>} 
          </ul>
          <div className='w-1/2'>
            {
              data.albums && <div><img src={process.env.PUBLIC_URL+'../images/oldworks/album/'+data.albums[currentIndex]} alt="" /></div>
            }
            {
             data.albums &&  <ul className='box-border mt-7 gap-1  grid grid-cols-4'>
              {
                data.albums.map((item,index)=>{
                  return(
                    <li 
                      key={index} 
                      className={'hover:brightness-100 cursor-pointer transition-all' + (index === currentIndex ? ' brightness-100' : ' brightness-50')}
                      onClick={()=>(setCurrentIndex(index))}
                    >
                      <img src={process.env.PUBLIC_URL+'../images/oldworks/album/'+item}alt="" />
                    </li>
                  )
                })
              }
             </ul>


            }
          </div>

        </div>
       
       
        : null }


    </div>
  )
}

export default WatchOldProject