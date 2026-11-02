import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { SmoothScroll } from './components/animations/SmoothScroll';
import { CustomCursor } from './components/animations/CustomCursor';
import { Preloader } from './components/layout/Preloader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Contact } from './sections/Contact';
import { Footer } from './components/layout/Footer';
import { ProjectModal } from './components/ui/ProjectModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Editorial Preloader Intro */}
      <AnimatePresence>
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Lenis Smooth Inertia Scrolling Wrapper */}
      <SmoothScroll>
        <div className="min-h-screen bg-[#FAF7F2] text-[#18191B] font-sans antialiased selection:bg-[#C5A059] selection:text-[#FAF7F2] relative overflow-x-hidden">
          {/* Custom Kinetic Cursor */}
          <CustomCursor />

          {/* GSAP Scroll Reading Bar */}
          <ScrollProgressBar />

          {/* Fixed Minimalist Navbar */}
          <Navbar />

          {/* Main Editorial Storyline */}
          <main>
            <Hero />
            <Projects />
            <About />
            <Skills />
            <Experience />
            <Contact />
          </main>

          {/* Editorial Footer */}
          <Footer />

          {/* Dedicated Project Case Study Modal */}
          <ProjectModal />
        </div>
      </SmoothScroll>
    </>
  );
};

export default App;
