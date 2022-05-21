import code from '../assets/icons/code.svg';
import notepad from '../assets/icons/notepad.svg';

export default function ExternalLinks () {
    return (
        <div className="external-links">
            <a href="https://github.com/1stofhername" target="_blank"><img id="code-icon" className="link-icon" src={code} /></a>
            <a href="https://medium.com/@arrowsrp" target="_blank"><img id="notepad-icon" className="link-icon" src={notepad} /></a>
        </div>
    )
}