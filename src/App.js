import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Project from './components/Project';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Project />
    </div>
  );
}

export default App;
