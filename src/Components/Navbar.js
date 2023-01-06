import React,{useEffec,useState} from 'react'
import { Link ,useLocation  } from "react-router-dom";
import Dropdown from './Dropdown';
import { FaTimes,FaBars } from "react-icons/fa";
import { MenuItems01, MenuItems02, MenuItems03} from './ＭenuItems'
import { motion } from "framer-motion";
function Navbar() {
  const [click,setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const handleClick = ()=> {
    console.log('clock')
    setClick(!click)
  }
  const closeMobileMenu = () => setClick(false)
  const onMouseEnter = (num) => {
    setCurrentItem(num)
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}
      className=" flex  items-center text-black py-3 px-6  w-full z-50 bg-white h-16 fixed ">
      <div className=''>
        <Link to='/'>
          <img src={process.env.PUBLIC_URL+ '/images/header_logo.png' } alt="" className='max-w-full w-[230px]' />
        </Link>
        
      </div>
      <div onClick={handleClick} className=" ml-auto  cursor-pointer md:hidden">
        { click ? <FaTimes/> : <FaBars/>}
      </div>
      <ul className={'menu_list hidden sm:flex ml-auto text-[18px] flex-wrap items-center  '}>
        <li 
          className=" hover:text-[#AE121F] transition group relative px-6 py-5 "
          onMouseEnter={()=>{onMouseEnter(1)}}
          onMouseLeave={onMouseLeave}
        >
          <Link to='/about-1'>品牌理念</Link>
          {currentItem === 1 ? dropdown && <Dropdown menuItems={MenuItems01}/>
              : null  }
        </li>
        <div className='text-[#AE121F] mx-5'>/</div>
        <li 
          className=" hover:text-[#AE121F] transition group relative  px-6 py-5"
          onMouseEnter={()=>{onMouseEnter(2)}}
          onMouseLeave={onMouseLeave}
        >
          <Link to='/work-1'>業績沿革</Link>
          {currentItem === 2 ?  dropdown && <Dropdown menuItems={MenuItems02}/> : null         }
        </li>
        <div className='text-[#AE121F] mx-5'>/</div>
        <li 
          className=" hover:text-[#AE121F] transition group relative px-6 py-5"
          onMouseEnter={()=>{onMouseEnter(3)}}
          onMouseLeave={onMouseLeave}
        >
          <Link to='/news-1'>最新消息</Link>
          {currentItem === 3 ?  dropdown && <Dropdown menuItems={MenuItems03}/> : null         }
        </li>
        <div className='text-[#AE121F] mx-5'>/</div>
        <li className=" hover:text-[#AE121F] transition group relative px-6 py-5">
          <Link to="/contact">聯絡我們</Link>
        </li>
      </ul>
      {/* mobile */}
      <ul className={'menu_list_mobile lg:hidden  flex  text-2xl pl-20 absolute w-full h-[100vh] flex-col transition-all opacity-100 -z-10  left-0 bg-white pt-10  ' + (click ? ' top-10'  : '  -top-[100vh]' )}>
        <li 
          className=" hover:text-[#AE121F] transition group relative py-5 "

        >
          <Link to='/about-1' className='font-bold' onClick={() => setClick(false)}>品牌理念</Link>
          <ul className='mt-4 flex flex-col'>
            {MenuItems01.map((item,index)=>{
              return(
                <Link key={index} to={item.path} onClick={() => setClick(false)} className='text-lg p-3'>
                  - {item.title}
                </Link>
              )
            })}
          </ul>
        </li>
       
        <li 
          className=" hover:text-[#AE121F] transition group relative   py-5"
        >
          <Link to='/work-1' className='font-bold' onClick={() => setClick(false)}>業績沿革</Link>
          <ul className='mt-4 flex flex-col'>
            {MenuItems02.map((item,index)=>{
              return(
                <Link key={index} to={item.path} onClick={() => setClick(false)} className='text-lg p-3'>
                  - {item.title}
                </Link>
              )
            })}
          </ul>
        </li>
        <li 
          className=" hover:text-[#AE121F] transition group relative py-5"
        >
          <Link to='/news-1' className='font-bold' onClick={() => setClick(false)}>最新消息</Link>
          <ul className='mt-4 flex flex-col'>
            {MenuItems03.map((item,index)=>{
              return(
                <Link key={index} to={item.path} onClick={() => setClick(false)} className='text-lg p-3'>
                  - {item.title}
                </Link>
              )
            })}
          </ul>
        </li>
        <li className=" hover:text-[#AE121F] transition group relative py-5">
          <Link to="/contact"  className='font-bold' onClick={() => setClick(false)}>聯絡我們</Link>
        </li>
      </ul>
    </motion.div>
  )
}

export default Navbar