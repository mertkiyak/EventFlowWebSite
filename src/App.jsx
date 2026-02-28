import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import HelpCenter from './pages/HelpCenter';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yardim" element={<HelpCenter />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/gizlilik" element={<PrivacyPolicy />} />
        <Route path="/hizmet-ve-kosullar" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
