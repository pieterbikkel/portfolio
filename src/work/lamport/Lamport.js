import "./Lamport.scss"
import { motion } from "framer-motion";
import Lamport from "../../assets/work/lamport.webp"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";
import GlobeIcon from "../../assets/globe.svg"

function LamportPage() {

    const link = "https://github.com/pieterbikkel/lamport-frontend"

    const paragraph1 = "Jitai is a school project we made during my second year at HAN, University of applied sciences. Jitai is an admin panel for the Jitai application. Jitai stands for Just in time area information. The fullstack solution offers crud usecases for area's locations, shops, buildings and franchises."
    const secondline = "We have made it together with a team 4 and finished the project with a job offering from the company we built it for."

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
          className="project-lamport"
        >
            <section className="project-lamport__about">
              <BackButton/>
              <div className="project-lamport__about__wrapper">
                <img src={Lamport} alt="Jitais full stack solution" />
                <div className="project-lamport__about__container page-margin">
                  <h1>Jitai</h1>
                  <a className="project-lamport__about__container--small" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                  </a>
                  <p>
                    {paragraph1}
                  </p>
                  <p>
                    {secondline}
                  </p>
                  <a className="project-lamport__about__container__button" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                    Visit Jitai
                  </a>
                </div>
              </div>

              <p className="project-lamport__about--base page-margin">
                {paragraph1}
              </p>
              <br />
              <p className="project-lamport__about--base page-margin">
                {secondline}
              </p>
            </section>

            <section className="project-lamport__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>React</li>
                <li>Typescript</li>
                <li>Java</li>
                <li>Spring</li>
                <li>Docker</li>
                <li>Scrum</li>
              </ul>
            </section>

            <section className="project-lamport__role page-margin">
              <h2>Role</h2>
              <p>
                My responsibility in this school project was the fronted and backend. We also switched roles during the scrum period. Every sprint someone else was the scrummaster. 
              </p>
            </section>
        </motion.div>
    )
}

export default LamportPage;