import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route
        //todo 404
          path="*"
          element={
            <main style={{ padding: "5rem 1.5rem" }}>
              <h2>404 page not found</h2>
              <p>There's nothing here!</p>  
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

