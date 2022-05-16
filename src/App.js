import './App.scss';
import Button from './components/button/Button';
import WorkCard from './components/workcard/WorkCard';
import Formdesk from './assets/work/formdesk.png';

function App() {

  const openResume = () => {
    console.log("Click");
  }

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
              <WorkCard link={workItem.link} img={workItem.img} title={workItem.title}/>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
