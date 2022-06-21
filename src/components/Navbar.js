import home from '../assets/icons/home.svg';
import work from '../assets/icons/work.svg';
import build from '../assets/icons/build.svg';
import { Link } from 'react-router-dom';

export default function Navbar () {

    const navLinks = [
        {
            'home':'/'
        }, 
        {
            'resume':"/resume"
        }, 
        {
            'projects':"/projects"
        }
    ]

    return (
        
        <div id="internal-links">
    
            
            <Link to="/" className="nav-link">
                {/* <img src={home} alt="home page" id="home-page-link" className='nav-icon'/> */}
                <p id="home-page-link" className="nav-icon">Home</p>
            </Link>
            
            
            <Link to="/resume" className="nav-link" id="resume-page-link">
                <p id="resume-page-link" className="nav-icon">Resume</p>
            </Link>
            
            <Link to="/projects" className="nav-link" id="projects-page-link">
                <p id="projects-page-link" className="nav-icon">Projects</p>
            </Link>

            <Link to="/blogs" className="nav-link" id="blogs-page-link">
                <p id="blogs-page-link" className="nav-icon">Blogs</p>
            </Link>
        </div>
    )
}