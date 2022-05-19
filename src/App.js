import './App.scss';
import Button from './components/button/Button';
import WorkCard from './components/workcard/WorkCard';
import Formdesk from './assets/work/formdesk.png';
import './Contact.scss'
import { useEffect, useState } from 'react';
import Work from './assets/contact.svg';
import { toast } from 'react-toastify';

function App() {

  const [formInfo, setFormInfo] = useState();

  const animateButton = function (e) {
    e.preventDefault();
    //reset animation
    e.target.classList.remove("animate");
    
    e.target.classList.add("animate");
    setTimeout(function () {
        e.target.classList.remove("animate");
    }, 700);
  };

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

    const bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener("click", animateButton, false);
    }

  }, [])

  const messageCheck = (e) => {
    e.preventDefault()

    if(formInfo.name === undefined || formInfo.email === undefined || formInfo.message === undefined) {
      toast.error("Please fill in all fields!")
    } else if (!formInfo.email.includes("@")) {
      toast.error("Please enter a valid email address!")
    } else {
      toast.success("Message send!")
    }
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormInfo({...formInfo, [name]: value});
  }

  const work = [
    {
      link: "/coming-soon",
      img: Formdesk,
      title: "Formdesk"
    },
  ]

  return (
    <>
      <section className="landing">
        <div className='landing__me page-margin'>
          <div className="landing__me__background"></div>
        </div>
        <div className='landing__text-section'>
          <div>
            <h1 className='landing__title page-margin'>Welcome</h1>
            <h1 className='landing__title page-margin'>I am <span className='landing__title--yellow'>Pieter</span></h1>
          </div>
          <p className='page-margin'>I am a full stack developer located in the Netherlands. My passion lies in making iOS and React apps. Currently I am studying Computer Science at the HAN, University of applied sciences.</p>
          <Button text="Check out my resume!"/>
        </div>
      </section>

      <section className='projects'>
        <h1 className='landing__title--yellow page-margin'>Projects</h1>
        <div className='projects__container'>
          {work.map((workItem) => (
            <WorkCard key={workItem.title} link={workItem.link} img={workItem.img} title={workItem.title}/>
          ))}
        </div>
      </section>

      <section className='contact' id="contact">
        <h1 className='landing__title--yellow page-margin'>Contact</h1>
        <div className='contact__container'>
          <form className='page-margin' name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className="input-container">
              <input type="text" id="name" className="text-input" autoComplete="off" placeholder="Enter your name" onChange={handleInputChange} required name="name"/>
              <label className="label" htmlFor="date">Name</label>
            </div>
            <div className="input-container">
              <input type="email" id="email" className="text-input" autoComplete="off" placeholder="Email" onChange={handleInputChange} required name="email"/>
              <label className="label" htmlFor="homeTeam">Email</label>
            </div>
            <div className="input-container">
              <textarea rows="6" type="text" id="message" className="text-input" autoComplete="off" placeholder="Message" onChange={handleInputChange} required name="message"/>
              <label className="label" htmlFor="otherTeam">Message</label>
            </div>
            <button className="bubbly-button" onClick={messageCheck}>Send</button>
          </form>
          <img src={Work} alt="contact envelope"/>
        </div>
      </section>
    </>
  );
} 

export default App;
