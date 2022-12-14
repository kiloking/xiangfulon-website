import React,{useEffec,useState} from 'react'
import { Link ,useLocation  } from "react-router-dom";
import Dropdown from './Dropdown';
import { FaTimes,FaBars } from "react-icons/fa";
import { MenuItems01, MenuItems02, MenuItems03} from './ＭenuItems'
function Navbar() {
  const [click,setClick] = useState(false)
  const [dropdown, setDropdown] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const handleClick = ()=> setClick(!click)
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
    <div className=" flex  items-center text-black py-3 px-6  w-full z-50 bg-white h-16 fixed  ">
      <div className=''>
        <Link to='/'>
          <img src={process.env.PUBLIC_URL+ '/images/header_logo.png' } alt="" className='max-w-full w-44' />
        </Link>
        
      </div>
      <div onClick={handleClick}>
        { click ? <FaTimes/> : <FaBars/>}
      </div>
      <ul className='menu_list flex ml-auto text-sm flex-wrap items-center  '>
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
          <Link>業績沿革</Link>
          {currentItem === 2 ?  dropdown && <Dropdown menuItems={MenuItems02}/> : null         }
        </li>
        <div className='text-[#AE121F] mx-5'>/</div>
        <li 
          className=" hover:text-[#AE121F] transition group relative px-6 py-5"
          onMouseEnter={()=>{onMouseEnter(3)}}
          onMouseLeave={onMouseLeave}
        >
          <Link>最新消息</Link>
          {currentItem === 3 ?  dropdown && <Dropdown menuItems={MenuItems03}/> : null         }
        </li>
        <div className='text-[#AE121F] mx-5'>/</div>
        <li className=" hover:text-[#AE121F] transition group relative px-6 py-5">
          <Link>聯絡我們</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar