import React from 'react'
import './project.css'
import anonymous from '../../assets/anonymous.png';
import clearQ from '../../assets/clearq.png';
import ticTacToe from '../../assets/tic-tac-toe.jpg';

const project = () => {
    return (
        <div id="projects">

            <div className='componentStyle'>
                <h1 className='secTitle'>My <span id='spanTitle'>Projects</span></h1>
            </div>

            <div className="portfolio">
                <div className="work-list card-list">
                    <div className="work card">
                        <img src={anonymous} alt="project image" />
                        <div className="hoverLayer">
                            <h3>Anonymous | React.js | Firebase </h3>
                            <p>October 2024</p>
                            <p>Start posting anonymously where no one will judge.</p>
                            <p>A Firebase App with full CRUD Operations.</p>
                            <a href="https://anonymous-post-publish.vercel.app" target='_blank'>View</a>
                        </div>
                    </div>
                    <div className="work card">
                        <img src={clearQ} alt="project image" />
                        <div className="hoverLayer">
                            <h3>ClearQ | MERN Stack </h3>
                            <p>March 2024</p>
                            <p>Manage Your Daily Tasks.</p>
                            <p><b>Features : </b> Full CRUD Operations.</p>
                            <p>A MERN STACK APP.</p>
                            <a href="https://clearq-frontend.onrender.com" target='_blank'>View</a>
                        </div>
                    </div>
                    <div className="work card">
                        <img src={ticTacToe} alt="project image" />
                        <div className="hoverLayer">
                            <h3>Tic-Tac-Toe Game | React.js </h3>
                            <p>February 2024</p>
                            <p>Undo Redo Features using REACT HOOKS</p>
                            <a href="https://github.com/Im-Pranshu/Tic-Tac-Toe" target='_blank'>View</a>
                        </div>
                    </div>
                </div>
                <a href="https://github.com/Im-Pranshu?tab=repositories" target='_blank' className="btn">See More</a>
            </div>

            <div className='eT2'>
            </div>
        </div>
    )
}

export default project
