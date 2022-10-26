import React from 'react';
import Home from './Home'
import Navbar from './Navbar';
import "../../public/style.css"
import About from './About';


function App() {
  return (
    <div className="background-image">
      <Navbar />
      <Home name="Kim Lancaster" title="Frontend Developer" />
      <About title="About Me" />
    </div>
  )
}

export default App;
