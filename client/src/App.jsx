import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';

import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/Footer/Footer';
import Chatbot from './components/common/Chatbot/Chatbot';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Booking from './pages/Booking/Booking';
import Community from './pages/Community/Community';
import Auth from './pages/Auth/Auth';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs/AboutUs';
import OurStory from './pages/AboutUs/OurStory';
import Partners from './pages/AboutUs/Partners';

import { theme } from './styles/themes/transTheme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="app">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/community" element={<Community />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/about/story" element={<OurStory />} />
              <Route path="/about/partners" element={<Partners />} />
            </Routes>
          </main>
          <Chatbot />
          <Footer />
          <ToastContainer position="bottom-right" autoClose={2000} />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
