import home from '../assets/icons/home.svg';
import work from '../assets/icons/work.svg';
import build from '../assets/icons/build.svg';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

export default function Navbar () {

    const { isActive, setIsActive } = useState("");
    
    function activateLink (e) {
        console.log(e.target.id);
    }

    // const navLinks = document.getElementsByClassName('nav-link');

    // for (let i = 0; i < navLinks.length; i++) {
    //     console.log(navLinks[i].selected);
    // }

    return (
        
        <div id="internal-links">
    
            
            <Link to="/" className="nav-link" selected={false} onClick={activateLink}>
                <p id="home-page-link" className="nav-icon">Home</p>
            </Link>
            
            
            <Link to="/resume" className="nav-link" id="resume-page-link" selected={false}>
                <p id="resume-page-link" className="nav-icon">Resume</p>
            </Link>
            
            <Link to="/projects" className="nav-link" id="projects-page-link" selected={false}>
                <p id="projects-page-link" className="nav-icon">Projects</p>
            </Link>

            <Link to="/blogs" className="nav-link" id="blogs-page-link" selected={false}>
                <p id="blogs-page-link" className="nav-icon">Blogs</p>
            </Link>
        </div>
    )
}