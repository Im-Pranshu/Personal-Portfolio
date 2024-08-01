import React from 'react'
import './project.css'
import profile from '../../assets/stars_bg.jpg';

const project = () => {
  return (
    <div id="projects">
        <h1 className='secTitle'>My <span id='journey'>Projects</span></h1> 
        <h2>Projects</h2>
        <div class="portfolio">
            <div class="work-list card-list">
                <div class="work card">
                    <img src={profile} alt="project image"/>
                    <div className="hoverLayer">
                        <h3>TodoApp | HTML , CSS | React JS</h3>
                        <p>March 2024</p>
                        <p><b>Features : </b> Delete Todo | Add Todo | Update Todo | Complete Todo</p>
                        <p>Used React Hooks and Local Storage.</p>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work card">
                    <img src={profile} alt="project image" />
                    <div class="hoverLayer">
                        <h3>Tic-Tac-Toe Game | HTML , CSS | React JS </h3>
                        <p>February 2024</p>
                        <p>Undo Redo Features using REACT HOOKS</p>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
                <div class="work card">
                    <img src={profile} alt="project image" />
                    <div class="hoverLayer">
                        <h3>Personal Portfolio | HTML | CSS </h3>
                        <p>September 2023</p>
                        <p>Implementes Basic Javascript to add button click responses.</p>
                        <p>Fully Responsive in small screen and large screens both.</p>
                        <a href="#"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
            <a href="#" class="btn">See More</a>
        </div>

        <div className='eT2'>
            
                
                
                
            </div>
    </div>
  )
}

export default project