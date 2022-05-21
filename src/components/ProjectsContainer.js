import { motion } from "framer-motion";
import { projectData } from "../data/project-data";
import ProjectCard from "./ProjectCard";


export default function Projects () {
    return (
    
        
            <motion.div id="projects-page"
            initial={{ height:0 }}
            animate={{ height:"100vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
            >
                <h1 className="sub-title-black">Projects</h1>

                <motion.div 
                initial={{ height:0 }}
                animate={{ height:"100vh" }}
                exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
                >
                    <div className="projects-container">
                    {projectData.map((project)=>{
                        return (
                        <ProjectCard project={project} />
                        )})}
                        </div>
                </motion.div>
                
            </motion.div>

            
        
    )
}