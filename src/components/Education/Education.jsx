import React from 'react'
import './Education.css'
import highSchool from "../../assets/high_school.jpg"
import intermediateSchool from "../../assets/intermediate_school.jpg"
import college from "../../assets/college.jpg"

const Education = () => {
    return (
        <div id='education'>
            {/* added this this div align h1 on center without affecting grid of content. */}
            <div className="componentStyle">
                <h1 className='secTitle'>My <span id='spanTitle'>Education</span></h1>
            </div>

            <div className='eduList card-list'>
                <div className='eduListItem card'>

                    <div className="highSchool bgCard"></div>
                    <div className='aboutEdu'>
                        <h3>High School</h3>
                        <h4>Krishna Education Centre</h4>
                        <p>2017-18</p>
                        <p>Scored 79%</p>
                    </div>
                    <div className='hoverLayer'>
                        <a href="https://tinyurl.com/10th-Marksheet-Pranshu-Sharma" target='_blank'>View</a>
                    </div>
                </div>

                <div className='eduListItem card'>
                    {/* <img src={intermediateSchool} alt="project image" /> */}
                    <div className="intermediate bgCard"></div>
                    <div className='aboutEdu'>
                        <h3>Intermediate </h3>
                        <h4>Krishna Education Centre</h4>
                        <p>2019-20</p>
                        <p>Scored 73%</p>
                    </div>
                    <div className='hoverLayer'>
                        <a href="https://tinyurl.com/12th-Marksheet-Pranshu-Sharma" target='_blank'>View</a>
                    </div>
                </div>

                <div className='eduListItem card'>
                    {/* <img src={college} alt="project image" /> */}
                    <div className="college bgCard"></div>
                    <div className='aboutEdu'>
                        <h3>B.Tech CSE</h3>
                        <h4>Axis Colleges</h4>
                        <p>2021-2025</p>
                        <p>CGPA:7.0</p>
                    </div>
                    <div className='hoverLayer'>
                        <a href="#">View</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education