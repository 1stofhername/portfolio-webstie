import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import user from '../assets/icons/user.svg';
import activeUser from '../assets/icons/activeUser.svg';
import work from '../assets/icons/work.svg';
import build from '../assets/icons/build.svg';

export default function Navbar () {

    const [activeLink, setActiveLink]=useState("")
    const { pathname } = useLocation();

    return (
        
        <div id="internal-links">
            
            <Link to="/" className="nav-link">
                <img id="home-page-link" className="nav-icon" src={user} />
            </Link>
            
            <Link to="/resume" className="nav-link" id="resume-page-link">
                <img id="resume-page-link" className="nav-icon" src={work}/>
            </Link>
            
            <Link to="/projects" className="nav-link" id="projects-page-link">
                <img id="projects-page-link" className="nav-icon" src={build} />
            </Link>
        </div>
    )
}