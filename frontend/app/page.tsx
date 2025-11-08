'use client';

import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
//import Stats from '@/components/sections/Stats';
import Jobs from '@/components/sections/Jobs';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

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