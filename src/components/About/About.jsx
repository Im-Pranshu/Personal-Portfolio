import React from 'react'
import './About.css'
import profile from '../../assets/profile-pic.png';
import profileLight from '../../assets/profile-pic-light.png';

const About = ({ theme }) => {
  return (
    <div id='about' className='aboutContainer'>
      <h1>About <span id='spanTitle'>Me</span></h1>
      <img className='profile' src={(theme == "dark" ? profile : profileLight)} alt="Profile pic of Pranshu Sharma" />
      <h2 id='devInf'>Frontend Developer</h2>
      <p>Foraging for a challenging opportunity where I can leverage my skills and also get a chance to learn new things. I am always curious to learn new concepts and algorithms, keened learner, always looking for new opportunities.</p>
      <a href="https://www.linkedin.com/in/pranshu-sharma1303/" target='_blank' id='knowMore'>Know More</a>
    </div>
  )
}

export default About