import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ConsultationOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing.lg};
  margin: ${props => props.theme.spacing.xl} 0;
`;

const OptionCard = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.small};
  cursor: pointer;
  transition: transform 0.3s;
  border: 2px solid ${props => props.selected ? props.theme.colors.primary : 'transparent'};
  
  &:hover {
    transform: translateY(-3px);
  }
`;

const OptionTitle = styled.h3`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const OptionDescription = styled.p`
  margin-bottom: ${props => props.theme.spacing.sm};
`;

const OptionPrice = styled.p`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
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
  border-radius: 4px;
  cursor: pointer;
`;

const ConsultationType = ({ selectedType, onSelectType, onBack, onNext }) => {
  const consultationTypes = [
    {
      id: 'general',
      title: 'General Consultation',
      description: 'Initial assessment and general advice about transition',
      price: '$100'
    },
    {
      id: 'hormonal',
      title: 'Hormone Therapy Consultation',
      description: 'Discussion about HRT options and prescriptions',
      price: '$150'
    },
    {
      id: 'surgical',
      title: 'Surgical Consultation',
      description: 'Evaluation for gender-affirming surgeries',
      price: '$200'
    }
  ];

  return (
    <div>
      <h2>Select Consultation Type</h2>
      
      <ConsultationOptions>
        {consultationTypes.map(type => (
          <OptionCard 
            key={type.id}
            selected={selectedType === type.id}
            onClick={() => onSelectType(type.id)}
          >
            <OptionTitle>{type.title}</OptionTitle>
            <OptionDescription>{type.description}</OptionDescription>
            <OptionPrice>{type.price}</OptionPrice>
          </OptionCard>
        ))}
      </ConsultationOptions>
      
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