import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Testimonials from './components/Testimonials.tsx';
import Pricing from './components/Pricing.tsx';
import Footer from './components/Footer.tsx';
import ReserveTable from './components/Reservetable.tsx';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Pricing />
      <ReserveTable />
      <Footer />
    </div>
  );
}

export default App;
