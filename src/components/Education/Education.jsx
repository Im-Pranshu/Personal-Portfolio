import React from 'react'
import './Education.css'
import { FaSchool, FaUserGraduate, FaUniversity } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <motion.div
            className="skillsContainer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <div className="componentStyle">
                <h1 className='secTitle'>My <span id='spanTitle'>Education</span></h1>
            </div>

            <div className='eduList card-list'>
                <motion.div className='eduListItem card'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                >
                    <div className="eduIcon"><FaSchool size={48} /></div>
                    <div className='aboutEdu'>
                        <h3>High School</h3>
                        <h4>Krishna Education Centre</h4>
                        <p>2017-18</p>
                        <p>Scored 79%</p>
                        <a className='eduViewBtn' href="https://tinyurl.com/10th-Marksheet-Pranshu-Sharma" target='_blank'>View</a>
                    </div>
                </motion.div>

                <motion.div className='eduListItem card'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
                >
                    <div className="eduIcon"><FaUserGraduate size={48} /></div>
                    <div className='aboutEdu'>
                        <h3>Intermediate </h3>
                        <h4>Krishna Education Centre</h4>
                        <p>2019-20</p>
                        <p>Scored 73%</p>
                        <a className='eduViewBtn' href="https://tinyurl.com/12th-Marksheet-Pranshu-Sharma" target='_blank'>View</a>
                    </div>
                </motion.div>

                <motion.div className='eduListItem card'
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                >
                    <div className="eduIcon"><FaUniversity size={48} /></div>
                    <div className='aboutEdu'>
                        <h3>B.Tech CSE</h3>
                        <h4>Axis Colleges</h4>
                        <p>2021-2025</p>
                        <p>CGPA:7.1</p>
                        <a className='eduViewBtn' href="#">View</a>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Education