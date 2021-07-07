import React from 'react';
import './css/style.css';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import LandingPage from "./components/landing-page";
import Education from "./components/education";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Nav from "./components/subcomponents/nav";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
        <Nav />
        <LandingPage />
        <Education />
        <Projects />
        <Contact />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
