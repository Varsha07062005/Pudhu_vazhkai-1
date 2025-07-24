import React from 'react';
import styled from '@emotion/styled';

const Section = styled.div`
  padding: 4rem 2rem;
  background: #fdfdfd;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  font-size: 1.2rem;
  color: #555;
  line-height: 1.8;
`;

const OurStory = () => {
  return (
    <Section data-aos="fade-up">
      <Title>Our Journey</Title>
      <Text>
        PudhuVazhkai started with a simple idea — to make every life matter.  
        We believe in empowering individuals, creating opportunities, and fostering real connections through technology and community.  
        Our mission grows with every heart we touch and every life we change.
      </Text>
    </Section>
  );
};

export default OurStory;
