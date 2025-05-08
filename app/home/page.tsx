'use client';

import Hero from '../components/Hero';
import About from '../components/About';
import Story from '../components/Story';
import Tokenomics from '../components/Tokenomics';
import HowToBuy from '../components/HowToBuy';
import FAQPage from '../faq/page';
import AdImage from '../components/AdImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AdImageOffice from '../components/AdImageOffice';

export default function Home() {

  return (
    <>
      <Navbar />
      <Hero />
      <div id="about">
        <About />
      </div>
      <div id="story">
        <Story />
      </div>
      <div id="tokenomics">
        <Tokenomics />
      </div>
      <AdImageOffice />
      <div id="how-to-buy">
        <HowToBuy />
      </div>
      <AdImage />
      <FAQPage />
      <Footer />
    </>
  );
}