import React from 'react';
import Icon from '../Images/Icon.jpg';
import { Link,useLocation } from 'react-router-dom';
import { useState,useEffect } from 'react';
function Header() {
  const location = useLocation();
  const [currentPage,setCurrentPage]=useState(location.pathname.slice(1));
  useEffect(()=>{
    setCurrentPage(location.pathname.slice(1))
  },[location])
  return (
    <div className='flex direction_row justify_between Header'>
        <span className='Image'>
            <img className='full_width full_height' src={Icon} alt="" />
        </span>
        <span className='flex  direction_row Pagination' >
        <Link to="/" className={`${currentPage===''?'Active':''}`}   >About Me</Link>
        <Link to="/FrontSkills" className={`${currentPage==='FrontSkills'?'Active':''}`} >Programmong Skills</Link>
        <Link to="/Skills" className={`${currentPage==='Skills'?'Active':''}`} >Skills</Link>
        <Link to="/Portfolio" className={`${currentPage==='Portfolio'?'Active':''}`} >Portfolio</Link>
        <Link to="/Contact" className={`${currentPage==='Contact'?'Active':''}`} >Contact</Link>
        </span>
        
    </div>
  )
}

export default Header
