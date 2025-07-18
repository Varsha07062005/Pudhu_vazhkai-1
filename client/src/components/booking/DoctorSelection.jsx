// 📁 Path: client/src/components/booking/DoctorSelection.jsx

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaUserMd, FaArrowRight } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import DoctorDetailsPanel from './DoctorDetailsPanel';

const DoctorList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${props => props.theme.spacing.lg};
`;

const DoctorCard = styled.div`
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

const DoctorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.md};
  margin-bottom: ${props => props.theme.spacing.md};
`;

const DoctorAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
`;

const DoctorDetails = styled.div`
  flex: 1;
`;

const DoctorName = styled.h3`
  margin-bottom: ${props => props.theme.spacing.xs};
`;

const DoctorSpecialty = styled.p`
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

const ViewButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s;

  &:hover {
    background: ${props => props.theme.colors.primaryHover};
  }
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.disabled ? props.theme.colors.lightBlue : props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.xl};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  float: right;
  transition: all 0.3s;

  &:hover {
    background: ${props => !props.disabled && props.theme.colors.primaryHover};
  }
`;

const doctors = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: `Dr. Sample Doctor ${i + 1}`,
  specialty: i % 2 === 0 ? 'Endocrinology' : 'Gender Surgery',
  bio: 'Experienced in transgender patient care with a focus on empathy and professionalism.',
  avatar: `SD${i + 1}`,
  hospitalLink: 'https://www.samplehospital.com',
}));

const DoctorSelection = ({ onSelectDoctor, onNext }) => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const handleSelect = (doctor) => {
    setSelectedDoctor(doctor);
    onSelectDoctor(doctor);
  };

  const openDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setShowDetails(true);
  };

  return (
    <div>
      <h2>Select a Doctor</h2>

      <DoctorList>
        {doctors.map(doctor => (
          <DoctorCard
            key={doctor.id}
            selected={selectedDoctor?.id === doctor.id}
            onClick={() => handleSelect(doctor)}
          >
            <DoctorInfo>
              <DoctorAvatar>{doctor.avatar}</DoctorAvatar>
              <DoctorDetails>
                <DoctorName>{doctor.name}</DoctorName>
                <DoctorSpecialty>{doctor.specialty}</DoctorSpecialty>
              </DoctorDetails>
            </DoctorInfo>
            <ViewButton onClick={(e) => { e.stopPropagation(); openDetails(doctor); }}>View Details</ViewButton>
          </DoctorCard>
        ))}
      </DoctorList>

      <NextButton onClick={onNext} disabled={!selectedDoctor}>
        Next <FaArrowRight />
      </NextButton>

      <AnimatePresence>
        {showDetails && (
          <DoctorDetailsPanel doctor={selectedDoctor} onClose={() => setShowDetails(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default DoctorSelection;
