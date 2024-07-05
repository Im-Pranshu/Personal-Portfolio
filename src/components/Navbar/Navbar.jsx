import React, {useEffect, useState } from 'react'
import './Navbar.css'
import logo_dark from '../../assets/logo_white.png';
import logo_light from '../../assets/logo_black.png';
import darkMode from '../../assets/light_mode.png';


const Navbar = ({theme,setTheme,rootTheme}) => {

  const toggle_theme = ()=>{
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className='navbar'>
      <nav>
        <img src={(theme == 'light') ? logo_light : logo_dark} alt="portfolio logo" className='logo'/>
    
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
        </ul>
        <button id='navBtn' className={(theme == 'light') ? 'lightModeBtn' : 'darkModeBtn'}>
          <img 
          src={darkMode}
          className={(theme == 'light') ? 'toggleLight' : 'toggleDark'}
          onClick={()=>{toggle_theme()}} 
          />
        </button>



        <a href="#contact"><button id='navBtn' className='contactBtn'>Contact</button></a>
      </nav>

    </div>  
  )
}

export default Navbar