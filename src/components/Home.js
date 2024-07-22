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

                {/* intro section */}

                <div className="main-section" id="intro">
                    <div id="home-image-container">
                        <img src={null} />
                    </div>
                    <div className="title">
                        <h2 id="greeting" className="sub-title">
                            Hello, my name is
                        </h2>
                        
                        <h1 className="name">
                            Alicia Parris
                        </h1>
                        <h2 id="fullstack-dev" className="sub-title">
                            fullstack developer
                        </h2>
                        <ContactMenu />
                    </div>
                    </div>

                   
                    <div className="main-section" layout="row">
                    
                    {/* //About me section// */}

                        <div className="main-sub-section" id="about-me">
                            <h2 className="sub-title">
                                About Me
                            </h2>
                        </div>

                        {/* //Activity section // */}
                        
                        <div className="main-sub-section" id="activity">
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