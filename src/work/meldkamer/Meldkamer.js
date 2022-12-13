import "./Meldkamer.scss"
import { motion } from "framer-motion";
import Meldkamer from "../../assets/work/meldkamer-coach.webp"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";

function MeldkamerPage() {

    const paragraph1 = "Meldkamercoach is a tool designed for auditors who answer the emergency line to process there results and audits. The project started out in Arnhem/Nijmegen, but will be scaled up through out the country at the moment."
    const secondline = "The project is now used by the Dutch government, so I can't show off any live website / code."

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
          className="project-meldkamer"
        >
            <section className="project-meldkamer__about">
              <BackButton/>
              <div className="project-meldkamer__about__wrapper">
                <img src={Meldkamer} alt="Melkamer coach" />
                <div className="project-meldkamer__about__container page-margin">
                  <h1>Meldkamer</h1>
                  <p>
                    {paragraph1}
                  </p>
                  <p>
                    {secondline}
                  </p>
                </div>
              </div>

              <p className="project-meldkamer__about--base page-margin">
                {paragraph1}
              </p>
              <br />
              <p className="project-meldkamer__about--base page-margin">
                {secondline}
              </p>
            </section>

            <section className="project-meldkamer__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>React</li>
                <li>Scrum</li>
                <li>Typescript</li>
                <li>Sass</li>
              </ul>
            </section>

            <section className="project-meldkamer__role page-margin">
              <h2>Role</h2>
              <p>
                My responsibility for this project was the frontend. I made the design for the graphs analyzing audits made by auditors and I realized my design by implementing a graph library.
              </p>
            </section>
        </motion.div>
    )
}

export default MeldkamerPage;