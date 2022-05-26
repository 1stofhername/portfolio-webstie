import compose from '../assets/icons/compose.svg';
import linkedin from '../assets/icons/linkedin.svg';
import code from '../assets/icons/code.svg';
import notepad from '../assets/icons/notepad.svg';

export default function ContactMenu () {
    return (
        <div className="contact-menu">
            <span className="connect-text">
                <p className="connect">Connect</p>
            </span>
            <span className='contact-icons'>
            <a href="mailto:aliciaparris@zoho.com?subject=Hi Alicia, let's talk!" className="contact-link"><img id="email" className="contact-icon" src={compose} alt="email" /></a>
            <a href="https://linkedin.com/in/idealcandidate" target="_blank" className="contact-link"><img id="linkedin-icon" className="contact-icon" src={linkedin} alt="Linkedin logo" /></a>
            <a href="https://github.com/1stofhername" target="_blank" className="contact-link"><img id="code-icon" className="contact-icon" src={code} alt="Github link" /></a>
            <a href="https://medium.com/@arrowsrp" target="_blank" className="contact-link"><img id="notepad-icon" className="contact-icon" src={notepad} alt="Medium blog logo" /></a>
            </span>
        </div>
    )
}