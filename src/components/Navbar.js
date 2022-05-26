import user from '../assets/icons/user.svg';
import work from '../assets/icons/work.svg';
import build from '../assets/icons/build.svg';
import { Link } from 'react-router-dom';

export default function Navbar () {

    return (
        
        <div id="internal-links">
            
            <Link to="/" className="nav-link">
                <img id="home-page-link" className="nav-icon" src={user} alt="home-link" />
            </Link>
            
            <Link to="/resume" className="nav-link" id="resume-page-link">
                <img id="resume-page-link" className="nav-icon" src={work} alt="resume-link" />
            </Link>
            
            <Link to="/projects" className="nav-link" id="projects-page-link">
                <img id="projects-page-link" className="nav-icon" src={build} alt="projects-link" />
            </Link>
        </div>
    )
}