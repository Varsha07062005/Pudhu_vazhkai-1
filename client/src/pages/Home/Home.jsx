import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import AboutSection from '../../components/home/AboutSection';
import FeatureHighlights from '../../components/home/FeatureHighlights';
import AnimatedOffers from '../../components/home/AnimatedOffers';
import OfferScroller from '../../components/home/OfferScroller';

// Animation keyframes
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

// Styled components
const HomeContainer = styled.div`
  padding: 2rem 0;
  margin: 0 auto;
  max-width: 1400px;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #5BCEFA 0%, #8BD8F5 100%);
  color: white;
  padding: 4rem 1.5rem;
  text-align: center;
  margin-bottom: 3rem;
  border-radius: 0 0 20px 20px;
  animation: ${fadeIn} 0.8s ease-out;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1.5rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
  }
`;

const QuoteContainer = styled.div`
  background: rgba(255,255,255,0.2);
  padding: 1.5rem;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 800px;
  font-style: italic;
  font-size: 1.3rem;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.3);
  animation: ${fadeIn} 1s ease-out 0.3s both;
`;

const MottoSection = styled.section`
  text-align: center;
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #111 0%, #000 100%);
  color: white;
  margin-top: 4rem;
  border-radius: 20px 20px 0 0;
  animation: ${fadeIn} 0.8s ease-out;
  
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    color: #F5A9B8;
    animation: ${float} 4s ease-in-out infinite;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const SectionGap = styled.div`
  height: 3rem;
`;
const quotes = [
  "Embrace your journey with courage and hope.",
  "Every new day is a step towards your true self.",
  "You are valid, you are loved, you belong.",
  "Your identity is your strength, not your weakness.",
  "The bravest thing you can be is yourself."
];


const Home = () => {
  const [dailyQuote, setDailyQuote] = useState("");

  useEffect(() => {
    const dayOfYear = Math.floor((Date.now() - Date.parse(new Date().getFullYear(), 0, 0)) / 86400000);
    setDailyQuote(quotes[dayOfYear % quotes.length]);
  }, []);

  return (
    <HomeContainer>
      <HeroSection>
        <h1>Welcome to PudhuVazhkai</h1>
        <QuoteContainer>
          <p>"{dailyQuote}"</p>
        </QuoteContainer>
      </HeroSection>
      
      <AnimatedOffers />
      <SectionGap />
      
      <OfferScroller />
      <SectionGap />
      
      <FeatureHighlights />
      <SectionGap />
      
      <AboutSection />
      <SectionGap />
      
      <MottoSection>
        <h2>Our Motto</h2>
        <p>To provide compassionate, comprehensive care and support for the transgender community, helping individuals live authentically and with dignity.</p>
      </MottoSection>
    </HomeContainer>
  );
};

export default Home;