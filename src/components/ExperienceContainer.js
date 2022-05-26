import { motion } from "framer-motion";
import { roles } from '../data/job-data';
import { v4 as uuid } from 'uuid';
import ExperienceCard from './ExperienceCard';



export default function Resume () {

    return (

        <motion.div 
            className="page-section" 
            id="resume-section"
            initial={{ height:0 }}
            animate={{ height:"100vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
        >
            <div className="resume-header">
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
            {roles.map(role=>{
                return (
                    
                    <ExperienceCard 
                        key={role.id}
                        title={role.title} 
                        org={role.org} 
                        date={role.date} 
                        ed={role.ed}
                        id={role.id}
                        className="experience-listing"
                    />)
                    
                })}

                </motion.div>
            </div>
            
        </motion.div>
    )
}