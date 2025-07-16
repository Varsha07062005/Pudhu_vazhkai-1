import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { FaUserCircle, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
const NavbarContainer = styled.nav`
 background: ${props => props.theme.colors.primary}; /* Same as before but we'll make it match footer */
  padding: 16px 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const Logo = styled(Link)`
  font-weight: 700;
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.xl};
  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

const AuthSection = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
  a {
    color: ${props => props.theme.colors.accent};
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: ${props => props.theme.spacing.sm};
    font-weight: 600;
  }
`;

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavbarContainer>
      <NavContent>
        <Logo to="/">PudhuVazhkai</Logo>
        
        <NavLinks>
          <Link to="/shop">Shop</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/community">Community</Link>
          <Link to="/about">About Us</Link>
        </NavLinks>
        
        <AuthSection>
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <FaUserCircle size={20} />
                Profile
              </Link>
              <Link to="/logout">
                <FaSignOutAlt size={20} />
                Logout
              </Link>
            </>
          ) : (
            <Link to="/auth">
              <FaSignInAlt size={20} />
              Sign In
            </Link>
          )}
        </AuthSection>
      </NavContent>
    </NavbarContainer>
  );
};

export default Navbar;