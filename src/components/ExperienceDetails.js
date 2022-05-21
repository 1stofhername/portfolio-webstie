import { motion } from "framer-motion";
import { roles } from '../data/job-data';
import cancel from '../assets/icons/cancel.svg';
import { v4 as uuid } from 'uuid';

export default function ExperienceDetails ({ org, handleCloseButtonClick }) {

    let role = roles.filter((role)=>{return(role.org===org)});
    const { title, qualities, skills, summary }=role[0];

    const qualitiesList = qualities.map((quality)=>{
        return <li key={uuid()}>{quality}</li>
    });

    const skillsList = skills.map((skill)=>{
        return <li className="skill-item" key={uuid()}>{skill}</li>
    });

    return (
        
        <motion.div 
        id="resume-sub-section"
        initial={{ height:0 }}
        animate={{ height:"100vh" }}
        exit={{ y: window.innerHeight, transition: { duration: 1.5 } }}
        >

            

            <div id="job-details-container">

            {/* <div className="back-button-container"> */}
                <img onClick={()=>handleCloseButtonClick()} className="back-icon" src={cancel} />
            {/* </div> */}

                <div className='job-detail' id="summary-div">
                    <h3 className='sub-title-job'>
                        {title}
                    </h3>
                    <p className='summary-paragraph'>
                        {summary}
                    </p>
                </div>

                <div className='job-detail' id="skills-container">
                    <h3 className='sub-title-job'>
                        Superpowers
                    </h3>
                    <span className='skill-set'>
                        {skillsList}
                    </span>
                </div>

                <div className='job-detail' id="skills-demonstrated-div">
                    <h3 className='sub-title-job'>
                        Skills demonstrated
                    </h3>
                        {qualitiesList}
                </div>
            </div>
        
        </motion.div>

    )
}