import youtube from '../assets/icons/youtube.svg';
import { v4 as uuid } from 'uuid';

export default function ProjectCard ({ project }) {


    const { title, links, img, tools } = project;
    console.log(title, links, img)

    return (
        
        <div id={title} className='project-card'>
            <h2 className='sub-title-black'>{title}</h2>
            <span className="image-container">
            <img className="project-image" src={img}/>
            </span>
            <span className="arrow-container"><span className="expand-arrow"></span></span>
            <div className ="button-container">
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
                        <button key={uuid()} className="project-button" onClick={()=> window.open(url, "_blank")}>{linkType==="Walkthrough"?<img id="video-icon" src={youtube}/>:null}{linkType}</button>
                    )
                })
                }
            </div>
        </div>
    )
}