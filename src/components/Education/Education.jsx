import React from 'react'
import './Education.css'
// import '../Project/project.css'
import profile from '../../assets/stars_bg.jpg';

const Education = () => {
  return (
    <div id='education' className='education'>
        <h1 className='secTitle'>My <span id='journey'>Journey</span></h1>

        <h2>Education</h2>

        <div className='eduList card-list'>
                <div className='eduListItem card'>
                    <img src={profile} alt="project image"/>
                    <div className='hoverLayer'>
                        <h3>High School - Krishna Education Centre</h3>
                        <p>2017-18</p>
                        <p>Scored 79%</p>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className='eduListItem card'>
                    <img src={profile} alt="project image"/>
                    <div className='hoverLayer'>
                        <h3>Intermediate - Krishna Education Centre</h3>
                        <p>2019-20</p>
                        <p>Scored 73%</p>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>

                <div className='eduListItem card'>
                    <img src={profile} alt="project image"/>
                    <div className='hoverLayer'>
                        <h3>B.Tech CSE - Axis Institute of Technology and Management</h3>
                        <p>2021-Persuing</p>
                        <p>SGPA:7.0</p>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Education