import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div id='skills' className='skills componentStyle'>
        <h1>My <span id='mySkills'>Skills</span></h1>
        <div className='eduTable'>
            <div>
                <h2>Technical Skills</h2>
                <ul className='skBlock'>
                    <div className='skContent'>
                        <h3>HTML</h3>
                        <p>70%</p>
                    </div>
                    <div className='skBlockAbout'>
                        <div className='layer'></div>
                    </div>
                   
                    <div className='skContent'>
                        <h3>CSS</h3>
                        <p>60%</p>
                    </div>
                    <div className='skBlockAbout'>
                        <div className='layer'></div>
                    </div>

                    <div className='skContent'>
                        <h3>JavaScript</h3>
                        <p>40%</p>
                    </div>
                    <div className='skBlockAbout'>
                        <div className='layer'></div>
                    </div>

                    <div className='skContent'>
                        <h3>C++</h3>
                        <p>75%</p>
                    </div>
                    <div className='skBlockAbout'>
                        <div className='layer'></div>
                    </div>
                </ul>

            </div>
            <div>
            <h2>Professional Skills</h2>
            <ul className='skBlock'>
                <div className='skContent'>
                    <h3>Problem Solving</h3>
                    <p>70%</p>
                </div>
                <div className='skBlockAbout'>
                    <div className='layer'></div>
                </div>

                <div className='skContent'>
                    <h3>LeaderShip</h3>
                    <p>70%</p>
                </div>
                <div className='skBlockAbout'>
                    <div className='layer'></div>
                </div>
                
                <div className='skContent'>
                    <h3>Empathy</h3>
                    <p>60%</p>
                </div>
                <div className='skBlockAbout'>
                    <div className='layer'></div>
                </div>

                <div className='skContent'>
                    <h3>Team Player</h3>
                    <p>40%</p>
                </div>
                <div className='skBlockAbout'>
                    <div className='layer'></div>
                </div>

            </ul>
                
            </div>
        </div>
    </div>
  )
}

export default Skills