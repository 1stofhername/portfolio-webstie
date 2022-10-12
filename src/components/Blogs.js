import { motion } from "framer-motion";
import { v4 as uuid } from 'uuid';
import BlogCard from "./BlogCard";
import { blogData } from '../data/blog-data';

export default function Blogs () {
    return(
    
        <motion.div id="blogs-page"
        initial={{ height:0 }}
        animate={{ height:"100vh" }}
        exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
        >
            <h1 className="sub-title-black" id="projects-title">Blogs</h1>

            <div className="projects-container" id="projects-parent">

            <motion.div 
            id="projects-child"
            className="projects-container"
            initial={{ height:0 }}
            animate={{ height:"100vh" }}
            exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
            >
                
                {blogData.map((blog)=>{
                    return (
                        
                    <BlogCard key={uuid()} blog={blog} />
                    )})}
                    
            </motion.div>

            </div>
            
        </motion.div>

        
    
    )
}