import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <div className='footer-col footer-left'>
          <div className='footer-brand'>
            <span>Pranshu Sharma</span>
            <div className='footer-tagline'>Software Developer | Building digital experiences</div>
          </div>
          <nav className='footer-nav-vertical'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div className='footer-col footer-center'>
          <div className='footer-social-label'>Connect</div>
          <div className='footer-social-row'>
            <a href="https://github.com/Im-Pranshu" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i className="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/pranshu-sharma1303/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:pranshusharma1303@gmail.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
          </div>
        </div>
        <div className='footer-col footer-right'>
          <div className='footer-contact-label'>Contact</div>
          <div><a href="mailto:pranshusharma1303@gmail.com"><i className="fas fa-envelope"></i> pranshusharma1303@gmail.com</a></div>
          <div><a href="tel:+919369073003"><i className="fas fa-phone"></i> +91 7272010120</a></div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='footer-location'>
          <i className="fas fa-map-marker-alt"></i> Kanpur, India
        </div>
        <div className='footer-copyright'>
          &copy; 2025 Pranshu Sharma. Made with <span role="img" aria-label="love">❤️</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer