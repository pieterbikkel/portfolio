import "./ProjectPage.scss"
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function ProjectPage({work}) {

    const location = useLocation();
    console.log(location.pathname);
    console.log(location.pathname.substring(('/work/') + 1));
    // const currentWork = work.filter((e) => e.title === location.pathname.substring(location.indexOf('/work/') + 1))

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

    return (
        <motion.div
            className="project-page"
        >
            <section className="page-margin">
                {/* <h1>{work[0].title}</h1> */}
            </section>
        </motion.div>
    )
}

export default ProjectPage;