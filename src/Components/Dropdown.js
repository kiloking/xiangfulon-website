import React,{useState} from 'react'
import { Link } from 'react-router-dom';
function Dropdown({menuItems}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <ul className=' absolute bg-red-700  top-14 left-0  text-white w-auto break-keep flex flex-col'>
      {menuItems.map((item,index)=>{
        return(
          <Link key={index} to={item.path} onClick={() => setClick(false)} className=' hover:bg-red-800 px-6  py-3'>
            {item.title}
          </Link>
        )
      })}
    </ul>
  )
}

export default Dropdown