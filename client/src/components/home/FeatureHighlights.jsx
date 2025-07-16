import React from 'react';
import styled from '@emotion/styled';
import { FaClinicMedical, FaShoppingBag, FaUsers, FaComments } from 'react-icons/fa';

const HighlightsContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto ${props => props.theme.spacing.xxl};
  padding: 0 ${props => props.theme.spacing.md};
`;

const SectionHeader = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const FeatureCard = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.lg};
  text-align: center;
  box-shadow: ${props => props.theme.shadows.small};
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const FeatureTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const FeatureHighlights = () => {
  const features = [
    {
      icon: <FaClinicMedical />,
      title: "Medical Support",
      description: "Access to hormone therapy and surgical consultation"
    },
    {
      icon: <FaShoppingBag />,
      title: "Affirming Products",
      description: "Shop for gender-affirming clothing and accessories"
    },
    {
      icon: <FaUsers />,
      title: "Community",
      description: "Connect with others on similar journeys"
    },
    {
      icon: <FaComments />,
      title: "24/7 Support",
      description: "Always available to answer your questions"
    }
  ];

  return (
    <HighlightsContainer>
      <SectionHeader>Our Services ✨</SectionHeader>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <p>{feature.description}</p>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </HighlightsContainer>
  );
};

export default FeatureHighlights;