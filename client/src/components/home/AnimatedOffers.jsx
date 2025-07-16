import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

const OffersContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto 3rem;
  padding: 0 1.5rem;
  animation: ${fadeIn} 0.8s ease-out;
`;

const OfferCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 20px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.8s ease-out, ${pulse} 3s ease-in-out infinite;
  transition: all 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 12px 25px rgba(0,0,0,0.15);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #5BCEFA;
  }
  
  p {
    font-size: 1.1rem;
    color: #555;
  }
`;

const AnimatedOffers = () => {
  const offers = [
    { id: 1, title: "Free First Consultation", desc: "Get your first consultation free with our specialists" },
    { id: 2, title: "HRT Starter Kit", desc: "20% off on hormone therapy starter packs" },
    { id: 3, title: "Community Support", desc: "Join our premium community for free this month" }
  ];
  
  const [currentOffer, setCurrentOffer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentOffer((prev) => (prev + 1) % offers.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <OffersContainer>
      <OfferCard>
        <h3>{offers[currentOffer].title}</h3>
        <p>{offers[currentOffer].desc}</p>
      </OfferCard>
    </OffersContainer>
  );
};

export default AnimatedOffers;