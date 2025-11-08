'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Section2';
import About from '@/components/sections/Section1';
//import Stats from '@/components/sections/Stats';
import Jobs from '@/components/sections/Section4';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Section5';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
    
      <Services />
      
      <Jobs />
      <Testimonials />
      <Contact />
    </main>
  );
}