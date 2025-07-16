import React from 'react';
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
import { theme } from './styles/themes/transTheme';
import Checkout from './pages/Checkout';

const App = () => {
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
            </Routes>
          </main>
          <Chatbot />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;