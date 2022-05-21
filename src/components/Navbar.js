import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import user from '../assets/icons/user.svg';
import work from '../assets/icons/work.svg';
import build from '../assets/icons/build.svg';

export default function Navbar () {

    function handleLinkSelection (linkId){
        document.getElementById(linkId).setAttribute('selected',true);}

    let location= useLocation();
    return (
        
        <div id="internal-links">
            
            <Link to="/">
                <img id="home-link" className="nav-icon" onClick={(e)=>{handleLinkSelection(e.target.id)}} src={user}/>
            </Link>
            
            <Link to="/resume">
                <img id="resume-link" onClick={(e)=>{handleLinkSelection(e.target.id)}} className="nav-icon" src={work}/>
            </Link>
            
            <Link to="/projects">
                <img id="projects-link" onClick={(e)=>{handleLinkSelection(e.target.id)}} className="nav-icon" src={build}/>
            </Link>
        </div>
    )
}