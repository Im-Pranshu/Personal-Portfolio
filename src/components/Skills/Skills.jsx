import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <motion.div
            id='skills'
            className="skillsContainer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="componentStyle">
                <h1 className='secTitle'>My <span id='spanTitle'>Education</span></h1>
            </div>
            <div className='skList'>
                <div>
                    <h2 className='skillType'>Technical Skills</h2>
                    <div className='skBlock'>
                        <div className='skContent'>
                            <h3>HTML</h3>
                            <p>70%</p>
                        </div>
                        <div className='skBlockAbout html'>
                            <div className='layer one'></div>
                        </div>

                        <div className='skContent'>
                            <h3>CSS</h3>
                            <p>60%</p>
                        </div>
                        <div className='skBlockAbout css'>
                            <div className='layer two'></div>
                        </div>

                        <div className='skContent'>
                            <h3>JavaScript</h3>
                            <p>40%</p>
                        </div>
                        <div className='skBlockAbout js'>
                            <div className='layer three'></div>
                        </div>

                        <div className='skContent'>
                            <h3>C++</h3>
                            <p>75%</p>
                        </div>
                        <div className='skBlockAbout cpp'>
                            <div className='layer four'></div>
                        </div>
                    </div>

                </div>

                <div>
                    <h2 className='skillType'>Professional Skills</h2>
                    <div className='skBlock'>
                        <div className='skContent'>
                            <h3>Problem Solving</h3>
                            <p>70%</p>
                        </div>
                        <div className='skBlockAbout ps'>
                            <div className='layer a'></div>
                        </div>

                        <div className='skContent'>
                            <h3>LeaderShip</h3>
                            <p>70%</p>
                        </div>
                        <div className='skBlockAbout lsp'>
                            <div className='layer b'></div>
                        </div>

                        <div className='skContent'>
                            <h3>Empathy</h3>
                            <p>60%</p>
                        </div>
                        <div className='skBlockAbout empt'>
                            <div className='layer c'></div>
                        </div>

                        <div className='skContent'>
                            <h3>Team Player</h3>
                            <p>85%</p>
                        </div>
                        <div className='skBlockAbout tp'>
                            <div className='layer d'></div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills