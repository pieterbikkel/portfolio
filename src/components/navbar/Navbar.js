import './Navbar.scss';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Mail} from "../../assets/mail.svg";
import {ReactComponent as Github} from "../../assets/github.svg";  
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Link as SmoothLink } from "react-scroll";
import { motion } from "framer-motion";

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
        <motion.nav 
            initial={{ opacity: 0, y: -77 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
            ease: "easeOut",
            duration: 0.7,
            delay: 0,
            }}
            className="navbar" style={navStyle}
        >
            <Link to="/"><h4>Pieter Bikkel</h4></Link>
            <div className='navbar__socials'>
                <a href="https://www.linkedin.com/in/pieterbikkel/" target="_blank" rel="noopener noreferrer">
                    <Linkedin onMouseEnter={() => setHoverLinkedin(true)} onMouseLeave={() => setHoverLinkedin(false)}/>
                </a>
                <SmoothLink to="contact" smooth={true} duration={500} >
                    <Mail onMouseEnter={() => setHoverMail(true)} onMouseLeave={() => setHoverMail(false)}/>
                </SmoothLink>
                <a href="https://github.com/pieterbikkel" target="_blank" rel="noopener noreferrer">
                    <Github onMouseEnter={() => setHoverGithub(true)} onMouseLeave={() => setHoverGithub(false)}/>
                </a>
            </div>
        </motion.nav>
    );
}

export default Navbar;