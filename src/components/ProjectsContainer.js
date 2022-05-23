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

                <div className="projects-container">

                <motion.div 
                className="projects-container"
                initial={{ height:0 }}
                animate={{ height:"100vh" }}
                exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
                >
                    
                    {projectData.map((project)=>{
                        return (
                        <ProjectCard project={project} />
                        )})}
                        
                </motion.div>

                </div>
                
            </motion.div>

            
        
    )
}