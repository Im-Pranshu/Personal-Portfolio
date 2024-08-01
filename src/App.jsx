import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Education from './components/Education/Education'
import Project from './components/Project/project'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  
  // fetching the theme from local storage 
  const currentTheme = localStorage.getItem('currentTheme');

  // changing bg color of the root element.
  const rootTheme = document.querySelector('#root');
  // if stored theme is dark then display black root.
  if(currentTheme == 'dark'){
    rootTheme.style.backgroundColor = "black";
  }
  
  const [theme, setTheme] = useState(currentTheme ? currentTheme : 'dark');
  console.log(theme);
  // if after toggling theme is dark then make root white else make root dark.
  theme == 'light' ? rootTheme.style.backgroundColor = "white" : rootTheme.style.backgroundColor = "black";

  // storing value in local storage
  useEffect(()=>{
    localStorage.setItem('currentTheme',theme);
  },[theme]);
  
  return (
    <div className='mainContainer'>
      <div className={`container navBar ${theme}`}>
        <Navbar theme={theme} setTheme={setTheme} rootTheme={rootTheme}/>          
      </div>
      <div className={`home container ${theme}`}>
        <Home/>
      </div>
      <div className={` container ${theme}`}>
        <div className="components">
          <About/>
        </div>
        <div className="components">
          <Education/>
        </div>
        <div className="components">
          <Project/>
        </div>
        <div className="components">
          <Skills/>
        </div>
        <div className="components">
          <Contact/>
        </div>
      </div>
      <div id='footer' className={`container ${theme}`}>
        <Footer/>
      </div>
    </div>
  )
}

export default App
