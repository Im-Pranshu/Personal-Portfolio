import React from 'react'
import './Education.css'


const Education = () => {
  return (
    <div id='education' className='education componentStyle'>
        <h1>My <span id='journey'>Journey</span></h1>
        <div className='eduTable'>
            <div className='eT1'>
                <h2>Education</h2>
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
            <div className='eT2'>
            <h2>Projects</h2>
                <ul className='edBlock'>
                    <h3>TodoApp | HTML , CSS | React JS</h3>
                    <div className='edBlockAbout'>
                        <p>March 2024</p>
                        <li><b>Features : </b> Delete Todo | Add Todo | Update Todo | Complete Todo</li>
                        <li>Used React Hooks and Local Storage.</li>
                    </div>
                </ul>
                <ul className='edBlock'>
                    <h3>Tic-Tac-Toe Game | HTML , CSS | React JS </h3>
                    <div className='edBlockAbout'>
                        <p>February 2024</p>
                        <li>Undo Redo Features using REACT HOOKS</li>
                    </div>
                </ul>
                <ul className='edBlock'>
                    <h3>Personal Portfolio | HTML | CSS </h3>
                    <div className='edBlockAbout'>
                        <p>September 2023</p>
                        <li>Implementes Basic Javascript to add button click responses.</li>
                        <li>Fully Responsive in small screen and large screens both.</li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Education