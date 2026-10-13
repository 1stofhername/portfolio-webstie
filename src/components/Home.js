import TechSection from "./TechSection";
import ContactMenu from "./ContactMenu";
import { motion } from "framer-motion";
import image from "../assets/me.png";

export default function Home () {

    return (
        <div className="page-section">
        <motion.div 
        id="home-page"
        initial={{ height:0 }}
        animate={{ height:"100vh" }}
        exit={{ y: window.innerHeight, transition: { duration: 1.0 } }}
        >
            <div id="landing">

                {/* intro section */}

                <div className="main-section" id="intro">
                    <TechSection />

    
                    </div>

                   
                    <div className="main-section" layout="row">
                    
                    {/* //About me section// */}

                        <div className="main-sub-section" id="about-me">
                            <h2 className="sub-title">
                                About Me
                            </h2>
                        </div>

                        {/* //Activity section // */}
                        
                        <div className="main-sub-section" id="activity" grey="true">
                        <h2 className="sub-title">
                                What I'm Doing
                            </h2>
                        </div>
                    </div>

                    <div className="main-section" layout="row">
        

                        {/* //Activity section // */}
                        
                        <div className="main-sub-section" id="activity" grey="true">
                        <h2 className="sub-title">
                                What I'm Doing
                            </h2>
                        </div>
                    </div>
            </div>
        </motion.div>
        </div>
    )
}