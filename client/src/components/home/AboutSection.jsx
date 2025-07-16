import React from 'react';
import styled from '@emotion/styled';

const AboutContainer = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md} ${props => props.theme.spacing.xxl};
`;

const AboutContent = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.xl};
  box-shadow: ${props => props.theme.shadows.medium};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing.xl};
  align-items: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  h2 {
    color: ${props => props.theme.colors.primary};
    margin-bottom: ${props => props.theme.spacing.md};
  }
`;

const AboutImage = styled.div`
  height: 300px;
  background: ${props => props.theme.colors.lightBlue};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.primary};
  font-weight: bold;
`;

const AboutSection = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <AboutText>
          <h2>About PudhuVazhkai</h2>
          <p>TransCare is a comprehensive platform dedicated to supporting the transgender community through medical services, affirming products, and a safe community space.</p>
          <p>Our mission is to provide accessible, compassionate care and resources for individuals at every stage of their gender journey.</p>
          <p>Founded in 2023, we've helped thousands of individuals access the care and support they need to live authentically.</p>
        </AboutText>
        <AboutImage>
          Our Team
        </AboutImage>
      </AboutContent>
    </AboutContainer>
  );
};

export default AboutSection;