import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';

import 'font-awesome/css/font-awesome.min.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import Project from './components/Project';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
