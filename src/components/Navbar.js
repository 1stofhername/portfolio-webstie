import { Link } from 'react-router-dom';
import React from 'react';

export default function Navbar () {
    
    function activateLink (e) {
        const navLinks = document.getElementsByClassName('nav-icon');
        for (let element of navLinks){
            if (element.id === e.target.id){
                element.setAttribute('selected', true);
            } else {
                element.removeAttribute('selected');
            }
        }
    }
    
    return (
        
        <div id="internal-links">
    
            
            <Link to="/" className="nav-link" selected={false} onClick={activateLink}>
                <p id="home-page-link" className="nav-icon">Home</p>
            </Link>
            
            
            <Link to="/resume" className="nav-link" id="resume-page-link" onClick={activateLink}>
                <p id="resume-page-link" className="nav-icon">Resume</p>
            </Link>
            
            <Link to="/projects" className="nav-link" id="projects-page-link" onClick={activateLink}>
                <p id="projects-page-link" className="nav-icon">Projects</p>
            </Link>

            <Link to="/blogs" className="nav-link" id="blogs-page-link" onClick={activateLink}>
                <p id="blogs-page-link" className="nav-icon">Blogs</p>
            </Link>
        </div>
    )
}