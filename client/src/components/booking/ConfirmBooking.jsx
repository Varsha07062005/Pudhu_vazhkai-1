import React from 'react';
import styled from '@emotion/styled';
import { FaArrowLeft, FaCreditCard } from 'react-icons/fa';

const SummaryBox = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.medium};
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const SummaryItem = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
  font-size: 1rem;
  line-height: 1.5;
`;

const Highlight = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ConfirmBooking = ({ doctor, appointmentType, selectedDate, onBack, onConfirm }) => {
  const formatDate = (date) => {
    if (!date) return '';
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  return (
    <div>
      <h2>Confirm Your Booking</h2>

      <SummaryBox>
        <SummaryItem>
          <Highlight>Doctor:</Highlight> {doctor?.name} ({doctor?.specialty})
        </SummaryItem>
        <SummaryItem>
          <Highlight>Consultation Type:</Highlight> {appointmentType.charAt(0).toUpperCase() + appointmentType.slice(1)}
        </SummaryItem>
        <SummaryItem>
          <Highlight>Date & Time:</Highlight> {formatDate(selectedDate)}
        </SummaryItem>
        <SummaryItem>
          <Highlight>Mode:</Highlight> {doctor?.mode} — {doctor?.location}
        </SummaryItem>
        <SummaryItem>
          <Highlight>Total Fee:</Highlight> {
            appointmentType === 'general' ? '$100' :
            appointmentType === 'hormonal' ? '$150' : '$200'
          }
        </SummaryItem>
      </SummaryBox>

      <NavButtons>
        <Button onClick={onBack}>
          <FaArrowLeft /> Back
        </Button>
        <Button onClick={onConfirm}>
          <FaCreditCard /> Proceed to Payment
        </Button>
      </NavButtons>
    </div>
  );
};

export default ConfirmBooking;
