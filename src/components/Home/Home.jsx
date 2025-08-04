import React from 'react'
import './Home.css'
import profile from '../../assets/profile-pic.png';
import profileLight from '../../assets/profile-pic-light.png';
import { motion } from 'framer-motion';

const Home = ({ theme }) => {
    return (
        <motion.div
            className="homeContainer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className='about'>
                <div className='homeProfile'>
                    <img src={(theme == "dark" ? profile : profileLight)} alt="" />
                </div>
                <div className='homeAbout'>
                    <h1>Hi, I'm <span id='name'>Pranshu Sharma</span></h1>
                    <h2>Software Developer</h2>
                    <p>Foraging for a challenging opportunity where I can leverage my skills and also get a chance to learn new things. I am always curious to learn new concepts and algorithms, keened learner , always looking for new opportunities.</p>
                    <div className='aboutBtn'>
                        <a href="#about" id='explore' className='aboutHomeBtn'>Explore</a>
                        <a href="https://linktr.ee/pranshu.sharma1303" target='_blank' className='aboutHomeBtn' id='connect'>Let's Connect</a>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Home
