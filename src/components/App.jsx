import React from 'react';
import Home from './Home'
import Navbar from './Navbar';
import "../../public/style.css"
import About from './About';
import Projects from './Projects';


function App() {
  return (
    <div className="background-image">
      <Navbar />
      <Home name="Kim Lancaster" title="Frontend Developer" />
      <About />
      <Projects />
    </div>
  )
}

export default App;
