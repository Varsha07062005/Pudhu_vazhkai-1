import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.primary}; /* Matching navbar color */
  color: #333333;
  padding: 48px 0;
`;
const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.xl};
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const FooterSection = styled.div`
  h3 {
    color: ${props => props.theme.colors.accent};
    margin-bottom: ${props => props.theme.spacing.md};
  }
  a, p {
    display: block;
    margin-bottom: ${props => props.theme.spacing.sm};
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    &:hover {
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  margin-top: ${props => props.theme.spacing.md};
  a {
    font-size: 1.5rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: ${props => props.theme.spacing.xxl};
  padding-top: ${props => props.theme.spacing.md};
  border-top: 1px solid rgba(255,255,255,0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>Quick Links</h3>
          <Link to="/shop">Shop</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/community">Community</Link>
        </FooterSection>
        
        <FooterSection>
          <h3>Contact Us</h3>
          <p><FaEnvelope /> support@pudhuvazhkai.com</p>
          <p><FaPhone /> +1 (800) 555-HELP</p>
        </FooterSection>
        
        <FooterSection>
          <h3>Legal</h3>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </FooterSection>
      </FooterContent>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} PudhuVazhkai. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};
export default Footer;