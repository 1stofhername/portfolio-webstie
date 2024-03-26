import { motion } from "framer-motion";
import pdf from '../assets/icons/pdf.svg';
import { roles } from '../data/job-data';
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
            <div className="page-title">
                <a  className="pdf-link" href="https://docs.google.com/document/d/e/2PACX-1vSTTzXoXU8aBTKpSIvw5uPL0UpjrsdWDsljymNaHzrhgRcdkQX_p8_Wn4ylZR0_qMEJmEiAz4GJ5M5f/pub">
                    <img className="pdf-icon" src={pdf} alt="resume pdf" />
                </a>
                <h1 className="sub-title-black">
                    Resume
                </h1>
            </div>

            <div id="parent-section">
            
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