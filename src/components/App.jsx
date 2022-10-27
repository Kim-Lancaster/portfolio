import React from 'react';
import Home from './Home'
import Navbar from './Navbar';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import "../../public/style.css"


function App() {
  return (
    <div className="background-image">
      <Navbar />
      <Home name="Kim Lancaster" title="Frontend Developer" />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
