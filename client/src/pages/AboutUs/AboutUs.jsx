import React from 'react';
import styled from '@emotion/styled';
import { FaUsers, FaHandshake, FaUserPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Wrapper = styled.section`
  background: linear-gradient(135deg, #f8f9fa, #e0e0e0);
  padding: 4rem 2rem;
  text-align: center;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 800px;
  border-radius: 1rem;
  margin: 2rem 0;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: #222;
  margin-bottom: 1rem;
`;

const SubText = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
`;

const ExploreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const ExploreCard = styled(Link)`
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2575fc, #6a11cb);
  color: white;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #ff512f, #dd2476);
  }
`;

const AboutUs = () => {
  return (
    <Wrapper>
      <Title>Welcome to PudhuVazhkai</Title>
      <SubText>
        Empowering Communities, Bridging Connections & Inspiring Lives.
      </SubText>
      <HeroImage src="https://source.unsplash.com/featured/?teamwork" alt="Community Working Together" />
      <ExploreContainer>
        <ExploreCard to="/about/story">
          <FaUsers size={30} style={{ marginBottom: '0.5rem' }} />
          Our Story
        </ExploreCard>
        <ExploreCard to="/about/partners">
          <FaHandshake size={30} style={{ marginBottom: '0.5rem' }} />
          Partners
        </ExploreCard>
        <ExploreCard to="/auth">
          <FaUserPlus size={30} style={{ marginBottom: '0.5rem' }} />
          Join Us
        </ExploreCard>
      </ExploreContainer>
    </Wrapper>
  );
};

export default AboutUs;
