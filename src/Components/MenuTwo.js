import React from 'react'
import { MenuItems02} from './ＭenuItems'
import { Link,useLocation  } from "react-router-dom";
function MenuTwo() {
  let location = useLocation();
  return (
    <div className='py-16'>
      <ul className='flex gap-6  text-lg'>
        {MenuItems02.map((item,index)=>{
          return(
            <li key={index}>
              <Link to={item.path} className={ 'pb-2 border-red-600 hover:border-b-4 ' + (location.pathname === item.path ? "  border-b-4  " : " border-0")}>{item.title}</Link> 
            </li>
          )
        })}
        
      </ul>
    </div>
  )
}

export default MenuTwo