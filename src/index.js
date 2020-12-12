import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Nav from './components/Nav';
import About from './components/About';

ReactDOM.render(
  <React.StrictMode>
    <Nav />
    <App />
    <About />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
