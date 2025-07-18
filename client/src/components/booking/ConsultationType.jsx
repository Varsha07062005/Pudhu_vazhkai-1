import React from 'react';
import styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight, FaHeartbeat, FaSyringe, FaUserNurse } from 'react-icons/fa';

const OptionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const OptionCard = styled.div`
  background: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.accent};
  color: ${props => props.selected ? props.theme.colors.accent : props.theme.colors.text};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.medium};
  cursor: pointer;
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : 'transparent'};
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    border: 2px solid ${props => props.theme.colors.primary};
  }
`;

const Title = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const Description = styled.p`
  margin-bottom: ${props => props.theme.spacing.sm};
  opacity: 0.8;
`;

const Price = styled.p`
  font-weight: bold;
  color: ${props => props.selected ? props.theme.colors.accent : props.theme.colors.primary};
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${props => props.theme.spacing.xl};
`;

const NavButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 6px;
  cursor: pointer;
`;

const IconWrapper = styled.span`
  font-size: 1.2rem;
`;

const ConsultationType = ({ selectedType, onSelectType, onBack, onNext }) => {
  const types = [
    {
      id: 'general',
      title: 'General Consultation',
      description: 'Initial assessment & advice about transition',
      price: '$100',
      icon: <FaHeartbeat />
    },
    {
      id: 'hormonal',
      title: 'Hormone Therapy Consultation',
      description: 'HRT options discussion & prescriptions',
      price: '$150',
      icon: <FaSyringe />
    },
    {
      id: 'surgical',
      title: 'Surgical Consultation',
      description: 'Evaluation for gender-affirming surgeries',
      price: '$200',
      icon: <FaUserNurse />
    }
  ];

  return (
    <div>
      <h2>Choose Consultation Type</h2>
      <OptionsGrid>
        {types.map(type => (
          <OptionCard 
            key={type.id}
            selected={selectedType === type.id}
            onClick={() => onSelectType(type.id)}
          >
            <IconWrapper>{type.icon}</IconWrapper>
            <Title>{type.title}</Title>
            <Description>{type.description}</Description>
            <Price>{type.price}</Price>
          </OptionCard>
        ))}
      </OptionsGrid>

      <NavButtons>
        <NavButton onClick={onBack}>
          <FaArrowLeft /> Back
        </NavButton>
        <NavButton onClick={onNext}>
          Next <FaArrowRight />
        </NavButton>
      </NavButtons>
    </div>
  );
};

export default ConsultationType;
