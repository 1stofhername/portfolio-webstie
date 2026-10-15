import TechSection from "./TechSection";
import ContactMenu from "./ContactMenu";
import image from "../assets/me.png";
import LinkBar from "./LinkBar";

export default function Home () {

    return (
        <div className="homepage">
            <div className="linkbar" id="intro">
                    <LinkBar />
                 </div>
            <div id="main-section">

                {/* page section 1 */}

                   
                    <div className="page-section" layout="row">
                    
                    {/* //About me section// */}

                        <div className="main-sub-section" id="about-me">
                            <h2 className="sub-title">
                                Page Sec1
                            </h2>
                        </div>

                        {/* //Activity section // */}
                        
                        <div className="main-sub-section" id="activity" grey="true">
                        <h2 className="sub-title">
                                What I'm Doing
                            </h2>
                        </div>
                    </div>

                    {/* //page section 2 // */}

                    <div className="page-section" layout="row">
        

                        {/* //Activity section // */}
                        
                        <div className="main-sub-section" id="activity" grey="true">
                        <h2 className="sub-title">
                                Page section 2
                            </h2>
                        </div>

                    </div>

                    {/* //page section 3 // */}

                     <div className="page-section" layout="row">
        

                        {/* //Activity section // */}
                        
                        <div className="main-sub-section" id="activity" grey="true">
                        <h2 className="sub-title">
                                Page section 3
                            </h2>
                        </div>

                        {/* //page section 3 // */}

                    </div>
            </div>
        </div>
    )
}