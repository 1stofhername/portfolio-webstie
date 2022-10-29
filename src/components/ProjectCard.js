import { v4 as uuid } from 'uuid';
import youtube from '../assets/icons/youtube.svg';


export default function ProjectCard ({ project }) {

    function handleProjectClick (e) {
        let id = e.target.getAttribute("name");
        let expanded = document.getElementById(id).getAttribute('expanded');

        if (!expanded) {
            document.getElementById(id).setAttribute('expanded', true)
        } else if (expanded) {
            document.getElementById(id).removeAttribute('expanded');
        };
    };

    const { title, links, img, tools } = project;

    return (
        
        <div onClick={(e)=>handleProjectClick(e)} name={title} id={title} expanded={undefined} className='project-card'>

            <span name={title} className="card-title">
            <h2 onClick={(e)=>{handleProjectClick(e)}} id={title} name={title} className='sub-title-black'>{title}</h2>
            </span>

            <span onClick={(e)=>{handleProjectClick(e)}} name={title} className="image-container">
            <img onClick={(e)=>{handleProjectClick(e)}} name={title} className="project-image" src={img} height="183px" alt="" />
            </span>

            <span onClick={(e)=>{handleProjectClick(e)}} name={title} className="arrow-container">
                <span onClick={(e)=>{handleProjectClick(e)}} name={title} className="expand-arrow"></span>
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
                    } else if (link.code) {
                        url=link.code;
                        linkType="Source code"
                    }
                    return (
                        <button key={uuid()} name={title} className="project-button" onClick={()=> window.open(url, "_blank")}>
                            {linkType==="Walkthrough"?
                            <img id="video-icon" src={youtube} alt="" />:
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
                        <p key={uuid()} className="tool-icon">{tool}</p>
                    )
                })}
            </div>
        </div>
    )
}