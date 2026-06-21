import React from 'react';
import Hero from './components/Hero';
import CodingProfiles from './components/CodingProfiles';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import MatrixBackground from './components/MatrixBackground';
import MatrixCursor from './components/MatrixCursor';

function App() {
  return (
    <div className="app-container" style={{ position: 'relative' }}>
      <MatrixCursor />
      <MatrixBackground />
      {/* Dynamic Background Elements */}
      <div className="bg-animation-wrapper">
        <div className="pan-gradient"></div>
        <div className="noise-overlay"></div>
        <div className="scanlines"></div>
      </div>

      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Projects />
        <CodingProfiles />
        <Skills />
        <Footer />
      </main>
    </div>
  );
}

export default App;
