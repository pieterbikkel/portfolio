import "./Incident.scss"
import { motion } from "framer-motion";
import Incident from "../../assets/work/incident.webp"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";
import GlobeIcon from "../../assets/globe.svg"

function IncidentPage() {

    const link = "https://apps.apple.com/nl/app/incident-rivm/id1122916924?l=en"

    const paragraph1 = "Incident is an app for the Dutch government that helps the fire department to get extra info on a specific scenario."
    const secondline = "The project is now used by the Dutch government and available in the appstore"

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
          className="project-incident"
        >
            <section className="project-incident__about">
              <BackButton/>
              <div className="project-incident__about__wrapper">
                <img src={Incident} alt="Incident app" />
                <div className="project-incident__about__container page-margin">
                  <h1>Incident</h1>
                  <a className="project-incident__about__container--small" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                  </a>
                  <p>
                    {paragraph1}
                  </p>
                  <p>
                    {secondline}
                  </p>
                  <a className="project-incident__about__container__button" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                    Check Incident out
                  </a>
                </div>
              </div>

              <p className="project-incident__about--base page-margin">
                {paragraph1}
              </p>
              <br />
              <p className="project-incident__about--base page-margin">
                {secondline}
              </p>
            </section>

            <section className="project-incident__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>Objective-C</li>
                <li>Scrum</li>
                <li>XML</li>
              </ul>
            </section>

            <section className="project-incident__role page-margin">
              <h2>Role</h2>
              <p>
                For Incident I did maintenance on the app. For this app I implemented new features such as a search functionality on the homescreen.
              </p>
            </section>
        </motion.div>
    )
}

export default IncidentPage;