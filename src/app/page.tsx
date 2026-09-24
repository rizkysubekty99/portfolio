import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Skills from '../components/Skills';
import WhatIDo from '../components/WhatIDo';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import NexaAssist from '../components/NexaAssist';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <WhatIDo />
        <Projects />
        <Experience />
        <NexaAssist />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
