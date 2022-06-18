import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ComingSoon from './pages/comingsoon/ComingSoon';
import { AnimatePresence } from 'framer-motion';
import App from './App';
import FormdeskPage from './work/formdesk/Formdesk';
import MeldkamerPage from './work/meldkamer/Meldkamer';
import KiddiPage from './work/kiddi/Kiddi';
import BytewavePage from './work/bytewave/Bytewave';
import FashionHotspotsPage from './work/fashionhotspots/FashionHotspots';
import LamportPage from './work/lamport/Lamport';
import IncidentPage from './work/incident/Incident';

// Images
import Formdesk from './assets/work/formdesk.webp';
import Meldkamer from './assets/work/meldkamer-coach.webp';
import Kiddi from './assets/work/kiddi.webp';
import Bytewave from './assets/work/bytewave.webp';
import FashionHotspots from './assets/work/fashion-hotspots.webp';
import Lamport from './assets/work/lamport.webp';
import Incident from './assets/work/incident.webp';

function Router() {

    const location = useLocation();

    const work = [
        {
            link: "/formdesk",
            img: Formdesk,
            title: "Formdesk",
        },
        {
            link: "/meldkamer",
            img: Meldkamer,
            title: "Meldkamer",
        },
        {
            link: "/kiddi",
            img: Kiddi,
            title: "Kiddi",
        },
        {
            link: "/bytewave",
            img: Bytewave,
            title: "Bytewave",
        },
        {
            link: "/fashion-hotspots",
            img: FashionHotspots,
            title: "Fashion Hotspots",
        },
        {
            link: "/jitai",
            img: Lamport,
            title: "Jitai",
        },
        {
            link: "/incident",
            img: Incident,
            title: "Incident",
        },
      ]

    return (
        <>
            <Navbar/>
            <ToastContainer/>
            <AnimatePresence exitBeforeEnter>
                <Routes location={location} key={location.key}>
                    <Route path='/' element={<App work={work}/>}/>

                    {/* Projects routes */}
                    <Route path={'/formdesk'} element={<FormdeskPage/>}/>
                    <Route path={'/meldkamer'} element={<MeldkamerPage/>}/>
                    <Route path={'/kiddi'} element={<KiddiPage/>}/>
                    <Route path={'/bytewave'} element={<BytewavePage/>}/>
                    <Route path={'/fashion-hotspots'} element={<FashionHotspotsPage/>}/>
                    <Route path={'/jitai'} element={<LamportPage/>}/>
                    <Route path={'/incident'} element={<IncidentPage/>}/>

                    <Route path='/coming-soon' element={<ComingSoon/>}/>
                    <Route
                        path="*"
                        element={
                        <main style={{ padding: "5rem 1.5rem" }}>
                            <h2 style={{'text-align': 'center'}}>404 page not found</h2>
                            <p style={{'text-align': 'center'}}>There's nothing here!</p>  
                        </main>
                        }
                    />
                </Routes>
            </AnimatePresence>
        </>
    )
}

export default Router;