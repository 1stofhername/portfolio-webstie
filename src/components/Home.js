import ContactMenu from "./ContactMenu";
import { motion } from "framer-motion";

export default function Home () {

    return (
        <div className="page-section">
        <motion.div 
        id="home-page"
        initial={{ height:0 }}
        animate={{ height:"100vh" }}
        exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
        >
            <div id="home">

                <div className="title">
                    <h2 id="greeting" className="sub-title">
                        Hello, my name is
                    </h2>
                    
                    <h1 className="name">
                        Alicia Parris
                    </h1>
                    <h2 id="job-title" className="sub-title">
                        technical native
                    </h2>
                </div>

                <ContactMenu />

            </div>
        </motion.div>
        </div>
    )
}