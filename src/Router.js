import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingSoon from './pages/comingsoon/ComingSoon';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import ProjectPage from './pages/projectpage/ProjectPage';

// Images
import Formdesk from './assets/work/formdesk.png';

function Router() {

    const location = useLocation();

    const work = [
        {
          link: "/coming-soon",
          img: Formdesk,
          title: "Formdesk"
        },
      ]

    return (
        <>
            <Navbar/>
            <ToastContainer/>
            <AnimatePresence  exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path='/' element={<App work={work}/>}/>
                    <Route path='/work/:id' element={<ProjectPage work={work}/>}/>
                    <Route path='/coming-soon' element={<ComingSoon/>}/>
                    <Route
                        path="*"
                        element={
                        <main style={{ padding: "5rem 1.5rem" }}>
                            <h2>404 page not found</h2>
                            <p>There's nothing here!</p>  
                        </main>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default Router;