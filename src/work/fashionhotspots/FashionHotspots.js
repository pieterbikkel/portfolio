import "./FashionHotspots.scss"
import { motion } from "framer-motion";
import FashionHotspots from "../../assets/work/fashion-hotspots.webp"
import BackButton from "../../components/backbutton/BackButton";
import { useEffect } from "react";
import GlobeIcon from "../../assets/globe.svg"

function FashionHotspotsPage() {

    const link = "https://www.fashionhotspots.nl"

    const paragraph1 = "Fashion Hotspots is a website where you can find / compare clothing stores per city. Clothing stores can also give out coupons or promote themselves."
    const secondline = "The website is now online, check it out!"

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
          className="project-fashion-hotspots"
        >
            <section className="project-fashion-hotspots__about">
              <BackButton/>
              <div className="project-fashion-hotspots__about__wrapper">
                <img src={FashionHotspots} alt="Fashion Hotspots website" />
                <div className="project-fashion-hotspots__about__container page-margin">
                  <h1>Fashion Hotspots</h1>
                  <a className="project-fashion-hotspots__about__container--small" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                  </a>
                  <p>
                    {paragraph1}
                  </p>
                  <p>
                    {secondline}
                  </p>
                  <a className="project-fashion-hotspots__about__container__button" href={link} target="_blank" rel="noreferrer">
                    <img src={GlobeIcon} alt="link icoon" />
                    Visit Fashion Hotspots
                  </a>
                </div>
              </div>

              <p className="project-fashion-hotspots__about--base page-margin">
                {paragraph1}
              </p>
              <br />
              <p className="project-fashion-hotspots__about--base page-margin">
                {secondline}
              </p>
            </section>

            <section className="project-fashion-hotspots__headlines page-margin">
              <h2>Headlines</h2>
              <ul>
                <li>React</li>
                <li>Sass</li>
                <li>Typescript</li>
                <li>Scrum</li>
              </ul>
            </section>

            <section className="project-fashion-hotspots__role page-margin">
              <h2>Role</h2>
              <p>
                My role for this project was working on the frontend. I worked on the general styles such as the fonts, but also on the cookie banner.
              </p>
            </section>
        </motion.div>
    )
}

export default FashionHotspotsPage;