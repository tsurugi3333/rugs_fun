import Hero from '../components/Hero';
import About from '../components/About';
import Story from '../components/Story';
import Tokenomics from '../components/Tokenomics';
import HowToBuy from '../components/HowToBuy';
import Community from '../components/Community';
import FAQPage from '../faq/page';
import AdImage from '../components/AdImage';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Story />
      <Tokenomics />
      <Community />
      <HowToBuy />
      <AdImage />
      <FAQPage />
      <Footer />
    </>
  );
}