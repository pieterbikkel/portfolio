import './App.scss';
import Button from './components/button/Button';

function App() {

  const openResume = () => {
    console.log("Click");
  }

  return (
    <div className="home">
      <div className='home__me page-margin'>
        <div className="home__me__background"></div>
      </div>
      <div className='home__text-section'>
        <div>
          <h1 className='home__title page-margin'>Welcome</h1>
          <h1 className='home__title page-margin'>I am <span className='home__title--yellow'>Pieter</span></h1>
        </div>
        <p className='page-margin'>I am a full stack developer located in the Netherlands. My passion lies in making iOS and React apps. Currently I am studying Computer Science at the HAN, University of applied sciences.</p>
        <Button text="Check out my resume!" buttonFunc={openResume}/>
      </div>
    </div>
  );
}

export default App;
