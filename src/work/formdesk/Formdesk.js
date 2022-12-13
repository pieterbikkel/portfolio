import "./Formdesk.scss"
import { motion } from "framer-motion";
import Formdesk from "../../assets/work/formdesk.webp"
import GlobeIcon from "../../assets/globe.svg"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";

function FormdeskPage() {

    const link = "https://formdesk-2.acc.theburo.nl"

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
          className="project-formdesk"
        >
            <section className="project-formdesk__about">
              <BackButton/>
              <div className="project-formdesk__about__wrapper">
                <img src={Formdesk} alt="formdesk" />
                <div className="project-formdesk__about__container page-margin">
                  <h1>Formdesk</h1>
                  <a className="project-formdesk__about__container--small" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                  </a>
                  <p>
                    Formdesk is an application that helps students to find studies abroad. You get an overview what studies are available, what other students experienced at the University and other inforamtion about an university. This application was built for the HAN, University of applied sciences. 
                  </p>
                  <p>
                    Currently Formdesk is still under construction.
                  </p>
                  <a className="project-formdesk__about__container__button" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                    Visit Formdesk
                  </a>
                </div>
              </div>

              <p className="project-formdesk__about--base page-margin">
                Formdesk is an application that helps students to find studies abroad. You get an overview what studies are available, what other students experienced at the University and other inforamtion about an university. This application was built for the HAN, University of applied sciences. 
              </p>
              <br />
              <p className="project-formdesk__about--base page-margin">
                Currently Formdesk is still under construction.
              </p>
            </section>

            <section className="project-formdesk__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>React</li>
                <li>Scrum</li>
                <li>Typescript</li>
                <li>Sass</li>
              </ul>
            </section>

            <section className="project-formdesk__role page-margin">
              <h2>Role</h2>
              <p>
                My responsibility for this project was the frontend. We used scrum to develop Formdesk.
              </p>
            </section>
        </motion.div>
    )
}

export default FormdeskPage;