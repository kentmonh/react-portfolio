import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import "typeface-poppins";

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';


ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <About />
    <Experience />
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
