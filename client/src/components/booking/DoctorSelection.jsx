import React from 'react';
import styled from '@emotion/styled';
import { FaUserMd, FaArrowRight } from 'react-icons/fa';

const DoctorList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
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
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
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

const DoctorBio = styled.p`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const NextButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  margin-top: ${props => props.theme.spacing.xl};
  cursor: pointer;
  float: right;
`;

const DoctorSelection = ({ onSelectDoctor, onNext }) => {
  const [selectedDoctor, setSelectedDoctor] = React.useState(null);
  
  const doctors = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Endocrinology',
      bio: 'Specializes in hormone therapy for transgender patients',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Gender Surgery',
      bio: 'Board-certified plastic surgeon with 10+ years experience',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Dr. Lisa Williams',
      specialty: 'Therapy',
      bio: 'LGBTQ+ focused mental health professional',
      avatar: 'LW'
    }
  ];

  const handleSelect = (doctor) => {
    setSelectedDoctor(doctor);
    onSelectDoctor(doctor);
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
            <DoctorBio>{doctor.bio}</DoctorBio>
          </DoctorCard>
        ))}
      </DoctorList>
      
      {selectedDoctor && (
        <NextButton onClick={onNext}>
          Next <FaArrowRight />
        </NextButton>
      )}
    </div>
  );
};

export default DoctorSelection;