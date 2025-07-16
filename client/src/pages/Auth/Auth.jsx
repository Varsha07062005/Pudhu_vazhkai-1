import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
const AuthContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.md};
`;

const AuthForm = styled.form`
  background: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing.xl};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const AuthTitle = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
  color: ${props => props.theme.colors.primary};
`;

const InputGroup = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: ${props => props.theme.spacing.sm};
  font-weight: 500;
`;

const InputField = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.lightBlue};
  border-radius: 4px;
  padding: ${props => props.theme.spacing.sm};
`;

const InputIcon = styled.span`
  margin-right: ${props => props.theme.spacing.sm};
  color: ${props => props.theme.colors.primary};
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: inherit;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.md};
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  margin-top: ${props => props.theme.spacing.md};
  transition: background 0.3s;
  &:hover {
    background: ${props => props.theme.colors.secondary};
  }
`;

const AuthSwitch = styled.p`
  text-align: center;
  margin-top: ${props => props.theme.spacing.md};
  a {
    color: ${props => props.theme.colors.primary};
    font-weight: 500;
    text-decoration: none;
  }
`;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle authentication logic here
    console.log(formData);
  };

  return (
    <AuthContainer>
      <AuthForm onSubmit={handleSubmit}>
        <AuthTitle>{isLogin ? 'Login' : 'Register'}</AuthTitle>
        
        {!isLogin && (
          <InputGroup>
            <InputLabel>Username</InputLabel>
            <InputField>
              <InputIcon><FaUser /></InputIcon>
              <Input 
                type="text" 
                name="username" 
                placeholder="Your username" 
                value={formData.username}
                onChange={handleChange}
                required
              />
            </InputField>
          </InputGroup>
        )}
        
        {!isLogin && (
          <InputGroup>
            <InputLabel>Email</InputLabel>
            <InputField>
              <InputIcon><FaEnvelope /></InputIcon>
              <Input 
                type="email" 
                name="email" 
                placeholder="Your email" 
                value={formData.email}
                onChange={handleChange}
                required={!isLogin}
              />
            </InputField>
          </InputGroup>
        )}
        
        <InputGroup>
          <InputLabel>Password</InputLabel>
          <InputField>
            <InputIcon><FaLock /></InputIcon>
            <Input 
              type="password" 
              name="password" 
              placeholder="Your password" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </InputField>
        </InputGroup>
        
        <SubmitButton type="submit">
          {isLogin ? 'Login' : 'Register'}
        </SubmitButton>
        
        <AuthSwitch>
          {isLogin ? (
            <>Don't have an account? <a href="#" onClick={() => setIsLogin(false)}>Register</a></>
          ) : (
            <>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login</a></>
          )}
        </AuthSwitch>
      </AuthForm>
    </AuthContainer>
  );
};

export default Auth;