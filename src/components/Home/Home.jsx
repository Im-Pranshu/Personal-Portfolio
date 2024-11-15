import React from 'react'
import './Home.css'
import profile from '../../assets/profile-pic.png';
import profileLight from '../../assets/profile-pic-light.png';

const Home = ({ theme }) => {
    return (
        <div id='home' className='homeContainer'>
            <div className='about'>
                <div className='homeProfile'>
                    <img src={(theme == "dark" ? profile : profileLight)} alt="" />
                </div>
                <div className='homeAbout'>
                    <h1>Hi, I'm <span id='name'>Pranshu Sharma</span></h1>
                    <h2>Frontend Developer</h2>
                    <p>Foraging for a challenging opportunity where I can leverage my skills and also get a chance to learn new things. I am always curious to learn new concepts and algorithms, keened learner , always looking for new opportunities.</p>
                    <div className='aboutBtn'>
                        <a href="#about" id='explore' className='aboutHomeBtn'>Explore</a>
                        <a href="https://linktr.ee/pranshu.sharma1303" target='_blank' className='aboutHomeBtn' id='connect'>Let's Connect</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home