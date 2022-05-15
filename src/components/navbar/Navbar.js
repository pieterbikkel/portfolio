/* eslint-disable jsx-a11y/anchor-is-valid */
import './Navbar.scss';
import {ReactComponent as Linkedin} from '../../assets/linkedin.svg';
import {ReactComponent as Mail} from "../../assets/mail.svg";
import {ReactComponent as Github} from "../../assets/github.svg";  
import { useEffect, useState } from 'react';
import { debounce, throttle } from "../../utils/Limitors";

function Navbar() {

    const [scrollAmount, setScrollAmount] = useState(0);
    const [hoverLinkedin, setHoverLinkedin] = useState(false)
    const [hoverMail, setHoverMail] = useState(false)
    const [hoverGithub, setHoverGithub] = useState(false)

    const rangeMap = (number, inMin, inMax, outMin, outMax) => {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }

    const navStyle = {
        backdropFilter: `blur(${scrollAmount}px)`,
        webkitBackdropFilter: `blur(${scrollAmount}px)`
    }

    const handleScroll = () => {
        let amountOfBlur = rangeMap(window.pageYOffset, 0, 50, 0, 5);
        setScrollAmount(amountOfBlur);
    }

    useEffect(() => {
        window.addEventListener("scroll", throttle(debounce(handleScroll)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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