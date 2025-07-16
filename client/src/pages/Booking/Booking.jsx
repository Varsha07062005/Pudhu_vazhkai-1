import React, { useState } from 'react';
import styled from '@emotion/styled';
import DoctorSelection from '../../components/booking/DoctorSelection';
import AppointmentCalendar from '../../components/booking/AppointmentCalendar';
import ConsultationType from '../../components/booking/ConsultationType';
const BookingContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const BookingSteps = styled.div`
  display: flex;
  margin-bottom: ${props => props.theme.spacing.xl};
  gap: ${props => props.theme.spacing.md};
`;

const Step = styled.div`
  flex: 1;
  text-align: center;
  padding: ${props => props.theme.spacing.sm};
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightBlue};
  color: ${props => props.active ? props.theme.colors.accent : props.theme.colors.text};
  border-radius: 4px;
  font-weight: ${props => props.active ? 'bold' : 'normal'};
`;

const Booking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [appointmentType, setAppointmentType] = useState('general');
  const [selectedDate, setSelectedDate] = useState(null);

  const steps = [
    'Select Doctor',
    'Choose Consultation Type',
    'Pick Date & Time',
    'Confirm Booking'
  ];

  return (
    <BookingContainer>
      <h1>Book an Appointment</h1>
      
      <BookingSteps>
        {steps.map((step, index) => (
          <Step key={step} active={currentStep === index + 1}>
            {step}
          </Step>
        ))}
      </BookingSteps>
      
      {currentStep === 1 && (
        <DoctorSelection 
          onSelectDoctor={setSelectedDoctor} 
          onNext={() => setCurrentStep(2)}
        />
      )}
      
      {currentStep === 2 && (
        <ConsultationType 
          selectedType={appointmentType}
          onSelectType={setAppointmentType}
          onBack={() => setCurrentStep(1)}
          onNext={() => setCurrentStep(3)}
        />
      )}
      
      {currentStep === 3 && (
        <AppointmentCalendar 
          doctor={selectedDoctor}
          appointmentType={appointmentType}
          onSelectDate={setSelectedDate}
          onBack={() => setCurrentStep(2)}
          onNext={() => setCurrentStep(4)}
        />
      )}
    </BookingContainer>
  );
};

export default Booking;
