import './App.scss';
import Button from './components/button/Button';
import WorkCard from './components/workcard/WorkCard';
import Formdesk from './assets/work/formdesk.png';
import './Contact.scss'
import { useEffect } from 'react';

function App() {

  const openResume = () => {
    console.log("Click");
  }

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

    const bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener("click", animateButton, false);
    }

}, [])

  const work = [
    {
      link: "/test",
      img: Formdesk,
      title: "Formdesk"
    },
    {
      link: "/test",
      img: Formdesk,
      title: "Formdesk"
    },
    {
      link: "/test",
      img: Formdesk,
      title: "Formdesk"
    },
    {
      link: "/test",
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
          <Button text="Check out my resume!" buttonFunc={openResume}/>
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

      <section className='contact'>
        <h1 className='landing__title--yellow page-margin'>Contact</h1>
        <form className='page-margin'>
          <div className="input-container">
            <input type="text" id="name" className="text-input" autoComplete="off" placeholder="Enter your name" required name="name"/>
            <label className="label" htmlFor="date">Name</label>
          </div>
          <div className="input-container">
            <input type="text" id="email" className="text-input" autoComplete="off" placeholder="Email" required name="email"/>
            <label className="label" htmlFor="homeTeam">Email</label>
          </div>
          <div className="input-container">
            <textarea rows="6" type="text" id="message" className="text-input" autoComplete="off" placeholder="Message" required name="message"/>
            <label className="label" htmlFor="otherTeam">Message</label>
          </div>
          <button className="bubbly-button">Send</button>
        </form>
      </section>
    </>
  );
} 

export default App;
