import React from 'react'
import './About.css'
import profile from '../../assets/profile-pic.png';
import profileLight from '../../assets/profile-pic-light.png';
import { motion } from 'framer-motion';

const About = ({ theme }) => {
  return (
    <motion.div
      className="aboutContainer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <h1>About <span id='spanTitle'>Me</span></h1>
      <img className='profile' src={(theme == "dark" ? profile : profileLight)} alt="Profile pic of Pranshu Sharma" />
      <h2 id='devInf'>Frontend Developer</h2>
      <p>Foraging for a challenging opportunity where I can leverage my skills and also get a chance to learn new things. I am always curious to learn new concepts and algorithms, keened learner, always looking for new opportunities.</p>
      <a href="https://www.linkedin.com/in/pranshu-sharma1303/" target='_blank' id='knowMore'>Know More</a>
    </motion.div>
  )
}

export default About