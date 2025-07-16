import React from 'react';
import styled from '@emotion/styled';
import { FaArrowRight } from 'react-icons/fa';

const OfferContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto ${props => props.theme.spacing.xxl};
  padding: 0 ${props => props.theme.spacing.md};
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
`;

const ScrollerContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md} 0;
  scrollbar-width: thin;
  scrollbar-color: ${props => props.theme.colors.primary} ${props => props.theme.colors.lightBlue};
  
  &::-webkit-scrollbar {
    height: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.lightBlue};
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
  }
`;

const OfferCard = styled.div`
  flex: 0 0 300px;
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.small};
  position: relative;
  transition: transform 0.3s;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const Badge = styled.div`
  position: absolute;
  top: -10px;
  right: 10px;
  background: ${props => props.theme.colors.error};
  color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing.xs} ${props => props.theme.spacing.sm};
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
`;

const OfferTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const OfferButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.md};
  transition: background 0.3s;
  
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const OfferScroller = () => {
  const offers = [
    { id: 1, discount: 20, title: "Hormone Therapy Consultation", description: "Get 20% off on your first consultation with our specialists" },
    { id: 2, discount: 15, title: "Gender-Affirming Products", description: "15% off on all gender-affirming products this month" },
    { id: 3, discount: 10, title: "Mental Health Support", description: "10% discount on therapy sessions for new members" },
    { id: 4, discount: 25, title: "Surgical Consultation", description: "Limited time offer on surgical consultations" },
    { id: 5, discount: 30, title: "Community Membership", description: "30% off on premium community membership" },
  ];

  return (
    <OfferContainer>
      <SectionHeader>Special Offers & Encouragements 💖</SectionHeader>
      <ScrollerContainer>
        {offers.map(offer => (
          <OfferCard key={offer.id}>
            <Badge>{offer.discount}% OFF</Badge>
            <OfferTitle>{offer.title}</OfferTitle>
            <p>{offer.description}</p>
            <OfferButton>
              Learn More <FaArrowRight />
            </OfferButton>
          </OfferCard>
        ))}
      </ScrollerContainer>
    </OfferContainer>
  );
};

export default OfferScroller;