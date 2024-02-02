import React from 'react'
import { Link } from 'react-router-dom';
import sun from '../assets/desktop/icon-sun.svg'
import moon from '../assets/desktop/icon-moon.svg'


function Header({handleChange,isChecked}) {

  
   
  return (
    <div className="header ">
        <Link to={'/'}>  
        <h1>devjobs</h1>
         </Link>
        

   

    <div className='switcher'>
        <img src={sun} alt="" />
    <div className="toggle-container">
      <input type="checkbox" id='check' className='toggle' onChange={handleChange} checked={isChecked}></input>
      <label htmlFor="check" className='label'></label>
    </div>
    <img src={moon} alt="" />
    </div>
    
   </div>
  )
}

export default Header