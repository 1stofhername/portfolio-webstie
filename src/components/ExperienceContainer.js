import { useState } from 'react';
import { motion } from "framer-motion";
import { roles } from '../data/job-data';
import { v4 as uuid } from 'uuid';
import ExperienceCard from './ExperienceCard';
import ExperienceDetails from './ExperienceDetails';

export default function Resume () {

    const [selectedJob, setSelectedJob]=useState("")

    function handleJobClick (org) {
        setSelectedJob(org);
        document.getElementById('resume-title').innerHTML=org
    }

    function handleCloseButtonClick () {
        setSelectedJob("");
        document.getElementById('resume-title').innerHTML="resume";
    }

    return (

        <motion.div 
            className="page-section" 
            id="resume-section"
            initial={{ height:0 }}
            animate={{ height:"100vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
        >
            <h1 id="resume-title" className="sub-title-black">
                Resume
            </h1>

            <div className='resume-container'>
            
            <motion.div 
            className="resume-container" 
            id="resume-section"
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