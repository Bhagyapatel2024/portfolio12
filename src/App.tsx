import React from 'react';
import Navbar from './components/Navbar.js'; // Adjust if renamed

import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects.tsx';
import Education from './components/Education';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="pt-15"> {/* Offset to prevent overlap */}
        <Hero />
        <About />
        <Projects />
        <Education />
      </div>
    </div>
  );
}

export default App;
