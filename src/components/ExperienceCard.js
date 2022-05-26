import { v4 as uuid } from 'uuid';
import graduationCap from "../assets/icons/graduation-cap.svg";
import { Link } from 'react-router-dom';

export default function JobListing ({ title, org, ed, date }) {

    return (

        <Link to={`/resume/${org}`} className="experience-link">
        <div key={uuid()} className="experience-card" id={org}>
            <span key={uuid()} id="top-corner"></span>
            
            <span key={uuid()} id={org} className="title-items">
                {ed?<img src={graduationCap} className="job-icon" alt="" />:null}
                
                <h3 key={uuid()} id={org} className="role-title">
                    {date}  {org}
                </h3>
            </span>

            <p key={uuid()} id={org} className='role-details'>{title}</p>
    
            <span key={uuid()} id="bottom-corner"></span>

        </div> 
        </Link>

    )
}