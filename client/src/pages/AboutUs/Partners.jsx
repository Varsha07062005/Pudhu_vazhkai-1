import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  padding: 4rem 2rem;
  background: #f8f9fa;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #222;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const PartnerCard = styled.div`
  background: white;
  padding: 1rem;
  border-radius: 1rem;
  width: 150px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    object-fit: contain;
  }
`;

const Partners = () => {
  return (
    <Section data-aos="fade-up">
      <Title>Our Trusted Partners</Title>
      <Grid>
        <PartnerCard><img src="https://via.placeholder.com/150x80?text=Partner+1" alt="Partner 1" /></PartnerCard>
        <PartnerCard><img src="https://via.placeholder.com/150x80?text=Partner+2" alt="Partner 2" /></PartnerCard>
        <PartnerCard><img src="https://via.placeholder.com/150x80?text=Partner+3" alt="Partner 3" /></PartnerCard>
        <PartnerCard><img src="https://via.placeholder.com/150x80?text=Partner+4" alt="Partner 4" /></PartnerCard>
      </Grid>
    </Section>
  );
};

export default Partners;
