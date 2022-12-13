import "./Kiddi.scss"
import { motion } from "framer-motion";
import Kiddi from "../../assets/work/kiddi.webp"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";
import GlobeIcon from "../../assets/globe.svg"

function KiddiPage() {

    const link = "https://apps.apple.com/nl/app/kiddi/id1178886673?l=en"

    const paragraph1 = "Kiddi is an app for the Dutch government that provides information for infectious diseases. This is used by childcare to detect and prevent diseases in time."
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
          className="project-kiddi"
        >
            <section className="project-kiddi__about">
              <BackButton/>
              <div className="project-kiddi__about__wrapper">
                <img src={Kiddi} alt="Kiddi app" />
                <div className="project-kiddi__about__container page-margin">
                  <h1>Kiddi</h1>
                  <a className="project-kiddi__about__container--small" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                  </a>
                  <p>
                    {paragraph1}
                  </p>
                  <p>
                    {secondline}
                  </p>
                  <a className="project-kiddi__about__container__button" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                    Check Kiddi out
                  </a>
                </div>
              </div>

              <p className="project-kiddi__about--base page-margin">
                {paragraph1}
              </p>
              <br />
              <p className="project-kiddi__about--base page-margin">
                {secondline}
              </p>
            </section>

            <section className="project-kiddi__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>Objective-C</li>
                <li>Swift</li>
                <li>XML</li>
              </ul>
            </section>

            <section className="project-kiddi__role page-margin">
              <h2>Role</h2>
              <p>
                For Kiddi I did maintenance on the app. I mainly restored broken features such as the search functionality and the about us section. For the about us page I integrated swift with objective-c.
              </p>
            </section>
        </motion.div>
    )
}

export default KiddiPage;