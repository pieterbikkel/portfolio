/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Mail} from "../../assets/mail.svg";
import {ReactComponent as Github} from "../../assets/github.svg";  
import { useEffect, useState } from 'react';

function Navbar() {

    const [hoverLinkedin, setHoverLinkedin] = useState(false)
    const [hoverMail, setHoverMail] = useState(false)
    const [hoverGithub, setHoverGithub] = useState(false)

    const navStyle = {
        backgroundColor: 'rgba(255, 255, 255, .9)',
        backdropFilter: `blur(5px)`,
        webkitBackdropFilter: `blur(5px)`
    }

    useEffect(() => {
        if (hoverLinkedin) {
            document.getElementById("linkedin-icon").setAttribute("style","fill:black");
        } else {
            document.getElementById("linkedin-icon").removeAttribute('style');
        }
    }, [hoverLinkedin])

    useEffect(() => {
        if (hoverMail) {
            document.getElementById("mail-icon").setAttribute("style","fill:black");
        } else {
            document.getElementById("mail-icon").removeAttribute('style');
        }
    }, [hoverMail])

    useEffect(() => {
        if (hoverGithub) {
            document.getElementById("github-icon").setAttribute("style","fill:black");
        } else {
            document.getElementById("github-icon").removeAttribute('style');
        }
    }, [hoverGithub])

    return (
        <nav className="navbar" style={navStyle}>
            <h4>Pieter Bikkel</h4>
            <div className='navbar__socials'>
                <a href="https://www.linkedin.com/in/pieterbikkel/" target="_blank" rel="noopener noreferrer">
                    <Linkedin onMouseEnter={() => setHoverLinkedin(true)} onMouseLeave={() => setHoverLinkedin(false)}/>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Mail onMouseEnter={() => setHoverMail(true)} onMouseLeave={() => setHoverMail(false)}/>
                </a>
                <a href="https://github.com/pieterbikkel" target="_blank" rel="noopener noreferrer">
                    <Github onMouseEnter={() => setHoverGithub(true)} onMouseLeave={() => setHoverGithub(false)}/>
                </a>
            </div>
        </nav>
    );
}

export default Navbar;