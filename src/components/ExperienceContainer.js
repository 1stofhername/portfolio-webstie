import { useState } from 'react';
import { motion } from "framer-motion";
import { roles } from '../data/job-data';
import { v4 as uuid } from 'uuid';
import ExperienceCard from './ExperienceCard';
import ExperienceDetails from './ExperienceDetails';
import cancel from '../assets/icons/cancel.svg';

export default function Resume () {

    const [selectedJob, setSelectedJob]=useState("")

    function handleJobClick (org) {
        setSelectedJob(org);
        document.getElementById('resume-title').innerHTML=org
        document.getElementById('parent-section').setAttribute('detailed',true);
        document.getElementById('child-section').setAttribute('detailed',true);
    }

    function handleCloseButtonClick () {
        setSelectedJob("");
        document.getElementById('resume-title').innerHTML="resume";
        document.getElementById('parent-section').removeAttribute('detailed');
        document.getElementById('child-section').removeAttribute('detailed')
    }

    return (

        <motion.div 
            className="page-section" 
            id="resume-section"
            initial={{ height:0 }}
            animate={{ height:"100vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
        >
            <div className="resume-header">
                {selectedJob?<img onClick={()=>handleCloseButtonClick()} className="back-icon" src={cancel} />:null}
                <h1 id="resume-title" className="sub-title-black">
                    Resume
                </h1>
            </div>

            <div className='resume-container' id="parent-section">
            
            <motion.div 
            className="resume-container" 
            id="child-section"
            initial={{ height:0 }}
            animate={{ height:"90vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.5 } }}
        >

                {!selectedJob?roles.map(role=>{
                    return (
                    <ExperienceCard 
                        handleJobClick={handleJobClick}
                        key={role.id}
                        title={role.title} 
                        org={role.org} 
                        date={role.date} 
                        ed={role.ed}
                        id={role.id}
                        className="experience-listing"
                    />)
                    
                }):
                 <div id="details-container">
                    {roles.map((role=>{
                        if (role.org===selectedJob){
                            return (
                                <ExperienceDetails
                                    handleCloseButtonClick={handleCloseButtonClick}
                                    title={role.title} 
                                    org={role.org} 
                                    qualities={role.qualities} 
                                    skills={role.skills} 
                                    summary={role.summary}
                                    key={uuid()}
                                />
                            )
                        }}
                        ))}
                </div>} 
                </motion.div>
            </div>
            
        </motion.div>
    )
}