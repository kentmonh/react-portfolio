import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'font-awesome/css/font-awesome.min.css';

import Nav from './components/Nav';
import About from './components/About';
import Project from './components/Project';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <About />
    <Project />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
