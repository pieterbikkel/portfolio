import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { BrowserRouter} from "react-router-dom";
import Router from "./Router";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Router/>
    </BrowserRouter>
  </React.StrictMode>
);

