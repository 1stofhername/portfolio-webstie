import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import user from '../assets/icons/user.svg';
import work from '../assets/icons/work.svg';
import build from '../assets/icons/build.svg';

export default function Navbar () {

    function handleLinkSelection (linkId){
        // if (linkId===location.pathname){console.log('hello')}
        // else {console.log('no')};
        console.log(params)
    }

    let { params } = useParams();
    return (
        
        <div id="internal-links">
            
            <Link to="/">
                <img id="/" className="nav-icon" onClick={(e)=>{handleLinkSelection(e.target.id)}} src={user}/>
            </Link>
            
            <Link to="/resume">
                <img id="/resume" onClick={(e)=>{handleLinkSelection(e.target.id)}} className="nav-icon" src={work}/>
            </Link>
            
            <Link to="/projects">
                <img id="/projects" onClick={(e)=>{handleLinkSelection(e.target.id)}} className="nav-icon" src={build}/>
            </Link>
        </div>
    )
}