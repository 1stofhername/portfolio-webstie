import { motion } from "framer-motion";
import { projectData } from "../data/project-data";
import ProjectCard from "./ProjectCard";
import { v4 as uuid } from 'uuid';


export default function Projects () {
    return (
    
        
            <motion.div id="projects-page"
            initial={{ height:0 }}
            animate={{ height:"100vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
            >
                <div className="page-title">
                    <h1 className="sub-title-black" id="projects-title">Projects</h1>
                </div>

                <div className="projects-container" id="projects-parent">

                <motion.div 
                id="projects-child"
                className="projects-container"
                initial={{ height:0 }}
                animate={{ height:"100vh" }}
                exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
                >
                    
                    {projectData.map((project)=>{
                        return (
                            
                        <ProjectCard key={uuid()} project={project} />
                        )})}
                        
                </motion.div>

                </div>
                
            </motion.div>

            
        
    )
}