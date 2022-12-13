import "./Bytewave.scss"
import { motion } from "framer-motion";
import Bytewave from "../../assets/work/bytewave.webp"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";
import GlobeIcon from "../../assets/globe.svg"

function BytewavePage() {

    const link = "https://bytewave.nl"

    const paragraph1 = "Bytewave is my own company. I have built the website to show off my projects and so that customers can contact me."
    const secondline = ""

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

    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])

    return (
        <motion.div
          variants={pageVariant}
          initial="start"
          animate="end"
          exit="exit"
          className="project-bytewave"
        >
            <section className="project-bytewave__about">
              <BackButton/>
              <div className="project-bytewave__about__wrapper">
                <img src={Bytewave} alt="Bytewaves website" />
                <div className="project-bytewave__about__container page-margin">
                  <h1>Bytewave</h1>
                  <a className="project-bytewave__about__container--small" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                  </a>
                  <p>
                    {paragraph1}
                  </p>
                  <p>
                    {secondline}
                  </p>
                  <a className="project-bytewave__about__container__button" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                    Visit Bytewave
                  </a>
                </div>
              </div>

              <p className="project-bytewave__about--base page-margin">
                {paragraph1}
              </p>
              <br />
              <p className="project-bytewave__about--base page-margin">
                {secondline}
              </p>
            </section>

            <section className="project-bytewave__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>React</li>
                <li>Sass</li>
              </ul>
            </section>

            <section className="project-bytewave__role page-margin">
              <h2>Role</h2>
              <p>
                I have built the whole website with form integration using Netlify.
              </p>
            </section>
        </motion.div>
    )
}

export default BytewavePage;