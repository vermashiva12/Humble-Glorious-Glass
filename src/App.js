import React from 'react'

import TopBar from './components/TopBar';

import Navbar from './components/Navbar';
import Hero from './components/hero';
import Services from './components/services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import About from './components/About';
import Choose from './components/Choose';

function App() {
  return (
    <div >
     <TopBar />
     <Navbar />
     <Hero />
     <Services />
     <Projects />
     <Choose />
     <About />
     <Contact />
     <Footer />
    </div>
  );
}

export default App;
