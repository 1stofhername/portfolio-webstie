import compose from '../assets/icons/compose.svg';
import linkedin from '../assets/icons/linkedin.svg';

export default function ContactMenu () {
    return (
        <div className="contact-menu">
            <p className="connect">Connect</p>
            <a href="mailto:aliciaparris@zoho.com?subject=Hi Alicia, let's talk!"><img className="contact-icon" src={compose} /></a>
            <a href="https://linkedin.com/in/idealcandidate" target="_blank"><img id="linkedin-icon" className="contact-icon" src={linkedin} /></a>
        </div>
    )
}