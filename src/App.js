import { useEffect } from 'react';
import './App.scss';
import Me from "./assets/ik.png"

function App() {

  useEffect(() => {

  }, [])

  return (
    <div className="home">
      <div className="home__container home__container--pastel">
        <img className="home__container__image" src={Me} alt="Pieter Bikkel"/>
      </div>
      <div className="home__container home__container--colourful">
        <h1>Pieter Bikkel</h1>
        <code>// About me</code>
        <h4>Fullstack software developer</h4>
        <p>I'm a passionate developer who loves tinkering with new technologies. I have experience with iOS and Web Development.</p>
      </div>
    </div>
  );
}

export default App;
