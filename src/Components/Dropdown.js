import React,{useState} from 'react'
import { Link } from 'react-router-dom';
function Dropdown({menuItems}) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <ul className=' absolute bg-red-700  top-12 left-0  text-white w-auto break-keep'>
      {menuItems.map((item,index)=>{
        return(
          <li key={index} className=' hover:bg-red-800 px-5  py-3'>
            <Link to={item.path} className='' onClick={() => setClick(false)}>{item.title}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default Dropdown