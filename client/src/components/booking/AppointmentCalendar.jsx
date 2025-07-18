import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaCalendarAlt, FaClock, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Container = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 12px;
  padding: ${props => props.theme.spacing.lg};
  box-shadow: ${props => props.theme.shadows.medium};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const MonthYear = styled.h3`
  margin: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${props => props.theme.spacing.sm};
`;

const Day = styled.div`
  text-align: center;
  font-weight: bold;
  padding: ${props => props.theme.spacing.sm} 0;
`;

const DateCell = styled.div`
  padding: ${props => props.theme.spacing.sm};
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  border-radius: 6px;
  background: ${props => props.selected ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.selected ? props.theme.colors.accent : props.theme.colors.text};
  opacity: ${props => props.disabled ? 0.4 : 1};
  transition: 0.2s;

  &:hover {
    background: ${props => props.disabled ? 'transparent' : props.theme.colors.lightBlue};
  }
`;

const TimeSection = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
`;

const TimeButton = styled.button`
  background: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.accent};
  color: ${props => props.selected ? props.theme.colors.accent : props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.lightBlue};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  margin: ${props => props.theme.spacing.xs};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.primary};
`;

const AppointmentCalendar = ({ doctor, appointmentType, onSelectDate, onBack, onNext }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const timeSlots = ['9:00 AM', '11:00 AM', '1:00 PM', '3:00 PM', '5:00 PM'];

  const today = new Date();

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();

  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (date < today) return;
    setSelectedDate(date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
    const appointmentDateTime = new Date(selectedDate);
    const [hours, period] = time.split(' ');
    let [hour] = hours.split(':');
    hour = parseInt(hour);
    if (period === 'PM' && hour < 12) hour += 12;
    if (period === 'AM' && hour === 12) hour = 0;
    appointmentDateTime.setHours(hour);
    appointmentDateTime.setMinutes(0);
    onSelectDate(appointmentDateTime);
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const cells = [];

    for (let i = 0; i < firstDay; i++) {
      cells.push(<DateCell key={`empty-${i}`} disabled />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      const isSelected = selectedDate && selectedDate.getDate() === day &&
        selectedDate.getMonth() === month && selectedDate.getFullYear() === year;
      const isPast = date < today;

      cells.push(
        <DateCell
          key={`day-${day}`}
          selected={isSelected}
          disabled={isPast}
          onClick={() => handleDateSelect(day)}
        >
          {day}
        </DateCell>
      );
    }

    return cells;
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>

      <h2>Select Date & Time</h2>
      <p>Booking with {doctor?.name} for {appointmentType} consultation</p>

      <Container>
        <Header>
          <NavButton onClick={handlePrevMonth}><FaArrowLeft /></NavButton>
          <MonthYear>
            {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
          </MonthYear>
          <NavButton onClick={handleNextMonth}><FaArrowRight /></NavButton>
        </Header>

        <Grid>
          {days.map(day => <Day key={day}>{day}</Day>)}
          {renderCalendar()}
        </Grid>
      </Container>

      {selectedDate && (
        <TimeSection>
          <h3><FaClock /> Available Time Slots</h3>
          {timeSlots.map(time => (
            <TimeButton
              key={time}
              selected={selectedTime === time}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </TimeButton>
          ))}
        </TimeSection>
      )}

      {selectedTime && (
        <button onClick={onNext}>Next</button>
      )}
    </div>
  );
};

export default AppointmentCalendar;
