import React from 'react'
import './Education.css'


const Education = () => {
  return (
    <div id='education' className='education componentStyle'>
        <h1>My <span id='journey'>Journey</span></h1>
        <h2>Education</h2>
        <div className='eduTable'>
                <ul className='edBlock'>
                    <h3>High School - Krishna Education Centre</h3>
                    <div className='edBlockAbout'>
                        <p>2017-18</p>
                        <li>Scored 79%</li>
                    </div>
                </ul>

                <ul className='edBlock'>
                    <h3>Intermediate - Krishna Education Centre</h3>
                    <div className='edBlockAbout'>
                        <p>2019-20</p>
                        <li>Scored 73%</li>
                    </div>
                </ul>

                <ul className='edBlock'>
                    <h3>B.Tech CSE - Axis Institute of Technology and Management</h3>
                    <div className='edBlockAbout'>
                        <p>2021-Persuing</p>
                        <li>SGPA:7.0</li>
                    </div>
                </ul>
        </div>
    </div>
  )
}

export default Education