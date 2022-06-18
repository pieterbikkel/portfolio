// Styling
import './App.scss';
import './Contact.scss'

// Components
import Button from './components/button/Button';
import WorkCard from './components/workcard/WorkCard';

// Assets
import Work from './assets/contact.svg';

// Other
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from "framer-motion";

function App({work}) {

  // Animations
  const letterVariant = {
    start : {
      opacity: 0,
      y: 60
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      }
    }
  }

  const titleVariant = {
    end: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const imageBGVariant = {
    start: {
      opacity: 0,
      x: "-1rem",
      y: "1rem"
    },
    end: {
      opacity: 0.4,
      x: 0,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        delay: 0.4
      }
    }
  }

  const pageVariant = {
    start: {
      opacity: 0
    },
    end: {
        opacity: 1,
        transition: {
            duration: 0.7
        }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.7
      }
    }
  }

  const handleClick = (e) => {
    switch (e.detail) {
      case 1:
        break;
      case 2:
        console.log("double click");
        
        break;
      case 3:
        break;
      default:
        return;
    }
  };

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  useEffect(() => {

    document.querySelectorAll(".text-input").forEach((element) => {
      element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
              event.target.nextElementSibling.classList.add("filled");
          } else {
              event.target.nextElementSibling.classList.remove("filled");
          }
      });
    })

  }, [])

  // Form handeling

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => setFormData({ ...formData, [e.target.id]: e.target.value });

  const handleSubmit = e => {

    e.preventDefault();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formData })
    })
      .then(() => toast.success("Message send!"))
      .catch(error => toast.error("Something went wrong"));
  };

  return (
    <motion.div
      variants={pageVariant}
      initial="start"
      animate="end"
      exit="exit"
    >
      <section className="landing">
        <div className='landing__me page-margin'>
          <motion.div 
            variants={imageBGVariant}
            initial="start"
            animate="end"
            className="landing__me__background"
          ></motion.div>
        </div>
        <div className='landing__text-section'>
          <div>
            <motion.h1 initial="start" animate="end" variants={titleVariant} className='landing__title page-margin'>
              <motion.span variants={letterVariant}>W</motion.span>
              <motion.span variants={letterVariant}>e</motion.span>
              <motion.span variants={letterVariant}>l</motion.span>
              <motion.span variants={letterVariant}>c</motion.span>
              <motion.span variants={letterVariant}>o</motion.span>
              <motion.span variants={letterVariant}>m</motion.span>
              <motion.span variants={letterVariant}>e</motion.span>
            </motion.h1>
            <h1 className='landing__title page-margin'>I am <span className='landing__title--yellow'>Pieter</span></h1>
          </div>
          <p onClick={handleClick} className='page-margin'>I am a full stack developer located in the Netherlands. My passion lies in making iOS and React apps. Currently I am studying Computer Science at the HAN, University of applied sciences.</p>
          <Button text="Check out my resume!"/>
        </div>
      </section>

      <section className='projects'>
        <h1 className='landing__title--yellow page-margin'>Projects</h1>
        <div className='projects__container'>
          {work.map((workItem) => (
            <WorkCard key={workItem.title} work={workItem}/>
          ))}
        </div>
      </section>

      <section className='contact' id="contact">
        <h1 className='landing__title--yellow page-margin'>Contact</h1>
        <div className='contact__container'>
          <form className='page-margin' method="POST" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-container">
              <input type="text" id="name" className="text-input" autoComplete="off" placeholder="Enter your name" value={formData.name} onChange={handleChange} required name="name"/>
              <label className="label" htmlFor="date">Name</label>
            </div>
            <div className="input-container">
              <input type="email" id="email" className="text-input" autoComplete="off" placeholder="Email" value={formData.email} onChange={handleChange} required name="email"/>
              <label className="label" htmlFor="homeTeam">Email</label>
            </div>
            <div className="input-container">
              <textarea rows="6" type="text" id="message" className="text-input" autoComplete="off" placeholder="Message" value={formData.message} onChange={handleChange} required name="message"/>
              <label className="label" htmlFor="otherTeam">Message</label>
            </div>
            <button type="submit" className="bubbly-button">Send</button>
          </form>
          <img src={Work} alt="contact envelope"/>
        </div>
      </section>
    </motion.div>
  );
} 

export default App;
