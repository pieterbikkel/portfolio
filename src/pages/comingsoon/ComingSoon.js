import "./ComingSoon.scss"
import { motion } from "framer-motion";

function ComingSoon() {

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
            variants={pageVariant}
            initial="start"
            animate="end"
            exit="exit"
            className="coming-soon"
        >
            <h1>Coming Soon</h1>
            <h3>Check back later</h3>
        </motion.div>
    )
}

export default ComingSoon;