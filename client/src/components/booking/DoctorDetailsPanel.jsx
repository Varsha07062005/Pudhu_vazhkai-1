// 📁 Path: client/src/components/booking/DoctorDetailsPanel.jsx

import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

const Panel = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 400px;
  height: 100%;
  background: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing.lg};
  box-shadow: -2px 0 10px rgba(0,0,0,0.2);
  z-index: 1001;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const HospitalLink = styled.a`
  display: inline-block;
  color: ${props => props.theme.colors.primary};
  margin-top: ${props => props.theme.spacing.sm};
  text-decoration: underline;
`;

const DoctorDetailsPanel = ({ doctor, onClose }) => {
  return (
    <Overlay onClick={onClose}>
      <Panel
        onClick={e => e.stopPropagation()}
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      >
        <CloseButton onClick={onClose}>Close</CloseButton>
        <h2>{doctor.name}</h2>
        <p><strong>Specialty:</strong> {doctor.specialty}</p>
        <p>{doctor.bio}</p>
        <HospitalLink href={doctor.hospitalLink} target="_blank" rel="noopener noreferrer">
          Visit Hospital
        </HospitalLink>
      </Panel>
    </Overlay>
  );
};

export default DoctorDetailsPanel;
