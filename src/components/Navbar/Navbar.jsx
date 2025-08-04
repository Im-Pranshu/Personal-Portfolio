import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { MdDarkMode, MdLightMode } from "react-icons/md";
import logo_dark from '../../assets/logo_white.png';
import logo_light from '../../assets/logo_black.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { motion } from 'framer-motion';

const Navbar = ({ theme, setTheme }) => {

  // this switches the theme when button is toggle theme button is clicked.
  const toggle_theme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  }

  // this is taking care of that in switching the theme icon also switches.
  const toggleThemeIcon = (theme === 'light') ? <MdLightMode size={25} /> : <MdDarkMode size={25} />;

  // for adding click functionality on hamburger icon.
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
      <motion.nav
        className='navBar'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className='logo'>
          <a href="/">
            <img
              src={(theme == 'light') ? logo_light : logo_dark}
              alt="portfolio logo" />
          </a>
        </div>

        <div className={showMediaIcons ? "menuLinks mobileMenuLinks" : "menuLinks"}>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
          </ul>
        </div>

        <div className='navButtons'>
          <ul className='navBtnDesktop'>
            <li>
              <motion.button
                id='navBtn'
                className={(theme == 'light') ? 'lightModeBtn' : 'darkModeBtn'}
                onClick={() => { toggle_theme() }}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {toggleThemeIcon}
              </motion.button>
            </li>
            <li>
              <div className="mobileContactBtn">
                <a href="#contact" >
                  <button className='contactBtn'>Contact</button>
                </a>
              </div>
            </li>
          </ul>

          {/* Hamburger Menu */}
          <div className="hamburgerMenu">
            <motion.a
              href="#"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <GiHamburgerMenu className='hamburg' />
            </motion.a>
          </div>

        </div>
      </motion.nav>
    </>
  )
}

export default Navbar