import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Capabilities from './components/Capabilities';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Capabilities />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
