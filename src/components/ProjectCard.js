import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import cancel from '../assets/icons/cancel.svg';
import youtube from '../assets/icons/youtube.svg';


export default function ProjectCard ({ project }) {

    const [selectedProject, setSelectedProject]=useState();
    const [isProjectSelected, setIsProjectSelected]=useState(false);
    console.log(isProjectSelected)

    function handleProjectClick (e) {
        let name = e.target.getAttribute("name");
        document.getElementById(name).setAttribute('selected', true);
        if (name !== selectedProject) {
            setSelectedProject(name);
        }
    }

    function handleCloseClick (e) {
        let name = e.target.getAttribute("name");
        document.getElementById(name).removeAttribute('selected');
        setSelectedProject("");
        setIsProjectSelected(false);
    }

    const { title, links, img, tools } = project;

    return (
        
        <div name={title} id={title} className='project-card'>

            <span name={title} className="project-title">
            {selectedProject===title?<img src={cancel} name={title} className="back-icon" id="close" onClick={(e)=>handleCloseClick(e)} />:null}
            <h2 onClick={(e)=>{handleProjectClick(e)}} id={title} name={title} className='sub-title-black'>{title}</h2>
            </span>

            <span onClick={(e)=>{handleProjectClick(e)}} name={title} className="image-container">
            <img onClick={(e)=>{handleProjectClick(e)}} name={title} className="project-image" src={img}/>
            </span>

            <span onClick={(e)=>{handleProjectClick(e)}} name={title} className="arrow-container"><span onClick={(e)=>{handleProjectClick(e)}} name={title} className="expand-arrow"></span>
            </span>

            <div name={title} className ="button-container">
                {links.map(link=>{
                    let linkType;
                    let url;
                    if(link.video){
                        url=link.video;
                        linkType="Walkthrough";
                    } else if (link.demo) {
                        url=link.demo;
                        linkType="Live demo"
                    } else if (link.readme) {
                        url=link.readme;
                        linkType="Read more"
                    }
                    return (
                        <button key={uuid()} name={title} className="project-button" onClick={()=> window.open(url, "_blank")}>
                            {linkType==="Walkthrough"?
                            <img id="video-icon" src={youtube}/>:
                            null}
                            <p>{linkType}</p>
                            </button>
                    )
                })
                }
            </div>
            <div className="tools-container">
                <p className='tool-icon'>Tools:</p>
                {tools.map((tool)=>{
                    return (
                        <p className="tool-icon">{tool}</p>
                    )
                })}
            </div>
        </div>
    )
}