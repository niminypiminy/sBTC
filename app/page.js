import React from 'react';
import Navbar from './components/navbar';
import HeroSection from './components/hero';
import FeaturesSection from './components/features';
import BannerSection from './components/banner';
import Footer from './components/footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection/>
      <BannerSection/>
      <Footer/>
      <main className="p-4">
      </main>
    </div>
  );
};

export default App;