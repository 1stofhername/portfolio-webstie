import graduationCap from "../assets/icons/graduation-cap.svg";
import { v4 as uuid } from 'uuid';

export default function JobListing ({ title, org, ed, date, handleJobClick }) {
    
    return (

        <div key={uuid()} className="experience-card" id={org} onClick={(e)=>{handleJobClick(e.target.id)}}>
            <span key={uuid()} id="top-corner"></span>
            
            <span key={uuid()} id={org} className="title-items">
                {ed?<img src={graduationCap} className="job-icon"/>:null}
                
                <h3 key={uuid()} id={org} className="role-title">
                    {date}  {org}
                </h3>
            </span>

            <p key={uuid()} id={org} className='role-details'>{title}</p>
    
            <span key={uuid()} id="bottom-corner"></span>

        </div> 

    )
}