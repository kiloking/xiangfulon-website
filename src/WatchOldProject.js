import React,{useState,useEffect,useRef} from 'react'
import { useParams, Link } from 'react-router-dom';
import {oldProjects} from './Components/WorkItems'
import { FaArrowLeft } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
// import required modules
import { Autoplay,FreeMode, Navigation, Thumbs } from "swiper";

function WatchOldProject() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const {projectid} = useParams()
  const [data ,setData] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0) 
  const currentEnv = 'development'
  // development  production
  const PUBLICURL = currentEnv === 'development' ?  process.env.PUBLIC_URL : '..'

  const [swiper, setSwiper] = useState(null);
  // unuse
  const changeSlide = (length)=>{
    const interval = setInterval(()=>{
      if(currentIndex > length-1) {
        setCurrentIndex(0)
      }else{
        setCurrentIndex((currentIndex) => currentIndex + 1)
      }
    },2000) 
    
  }
  const si = (length) =>{
    setInterval(changeSlide(length), 2000);
  }
  const stopChangeImage = () =>{
    clearInterval(si);
  }

  const handleClick = (index) =>{
    swiper.slideTo(index)
  }


  useEffect(()=>{
    const currentData = oldProjects.find((item)=>{
      return item.project_code === projectid
    })
    setData(currentData)
    // changeSlide(currentData.albums.length)
  },[currentIndex])
  return (
    <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat '
      style={{backgroundImage: `url(${PUBLICURL + '/images/blockbg.png' })`}}
    >
      <div className='px-10 pt-20 '>
        <Link to="/work-1"><FaArrowLeft size="36px" color="black"/></Link>
      </div>
      {data ?
        <div className='px-10 py-14 flex flex-col md:flex-row gap-6 '>
          <div className='w-full md:w-1/3'>
            <img src={PUBLICURL+"/images/oldworks/"+ data.project_code+'@3x.png' } alt="" className='max-w-full'/>
          </div>
          <ul className='w-full md:w-1/2 leading-10 text-zinc-800 mt-10 text-lg'>
            {data.title            && <div className='text-2xl text-[#003049] font-bold mb-4'>{data.title}</div> }
            {data.address          && <div>???????????? / {data.address}</div>}
            {data.land_size        && <div>???????????? / {data.land_size}</div>} 
            {data.house_size       && <div>???????????? / {data.house_size}</div>} 
            {data.build_floor      && <div>???????????? / {data.build_floor}</div>}
            {data.build_count      && <div>???????????? / {data.build_count}</div>} 
            {data.build_design     && <div>???????????? / {data.build_design}</div>}
            {data.build_create     && <div>???????????? / {data.build_create}</div>}
            {data.build_openspace  && <div>???????????? / {data.build_openspace}</div>} 
            {data.build_env        && <div>???????????? / {data.build_env}</div>} 
            {data.open_year        && <div>???????????? / {data.open_year}</div>} 
          </ul>
          <div className='w-full md:w-2/5 px-2 relative' >
          <Swiper
            onSwiper={setSwiper}
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            navigation={true}
            modules={[Autoplay,FreeMode, Navigation, Thumbs]}
            className="mySwiper2 w-full"
            onSlideChange={(swiperCore)=>{
              const {
                activeIndex,
                snapIndex,
                previousIndex,
                realIndex,
              } = swiperCore;
              console.log({ activeIndex, snapIndex, previousIndex, realIndex });
              setCurrentIndex(activeIndex)
            }}
          >
            {
              data.albums &&
              data.albums.map((item,index)=>{
                return(
                  <SwiperSlide key={'main'+index} >
                    <img src={PUBLICURL+'/images/oldworks/album/'+item}  className="w-full"/>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>

            {/* {
              data.albums && <div><img src={PUBLICURL+'/images/oldworks/album/'+data.albums[currentIndex] } alt="" /></div>
            }*/}
            {
             data.albums &&  <ul className='box-border mt-7 gap-1  grid grid-cols-2 md:grid-cols-5'>
              {
                data.albums.map((item,index)=>{
                  return(
                    <li 
                      key={index} 
                      className={'hover:brightness-100 cursor-pointer transition-all' + (index === currentIndex ? ' brightness-100' : ' brightness-50')}
                      onClick={()=>(handleClick(index))}
                    >
                      <img src={PUBLICURL+'/images/oldworks/album/'+item }alt="" />
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