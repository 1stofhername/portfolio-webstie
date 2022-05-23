import compose from '../assets/icons/compose.svg';
import linkedin from '../assets/icons/linkedin.svg';
import code from '../assets/icons/code.svg';
import notepad from '../assets/icons/notepad.svg';

export default function ContactMenu () {
    return (
        <div className="contact-menu">
            <p className="connect">Connect</p>
            <span className='contact-icons'>
            <a href="mailto:aliciaparris@zoho.com?subject=Hi Alicia, let's talk!" className="contact-link"><img className="contact-icon" src={compose} /></a>
            <a href="https://linkedin.com/in/idealcandidate" target="_blank" className="contact-link"><img id="linkedin-icon" className="contact-icon" src={linkedin} /></a>
            <a href="https://github.com/1stofhername" target="_blank" className="contact-link"><img id="code-icon" className="contact-icon" src={code} /></a>
            <a href="https://medium.com/@arrowsrp" target="_blank" className="contact-link"><img id="notepad-icon" className="contact-icon" src={notepad} /></a>
            </span>
        </div>
    )
}