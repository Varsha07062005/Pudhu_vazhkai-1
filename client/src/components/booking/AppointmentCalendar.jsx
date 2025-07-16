import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaCalendarAlt, FaClock, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CalendarContainer = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.small};
`;

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const MonthYear = styled.h3`
  margin: 0;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: ${props => props.theme.spacing.sm};
`;

const DayHeader = styled.div`
  text-align: center;
  font-weight: bold;
  padding: ${props => props.theme.spacing.sm} 0;
`;

const DayCell = styled.div`
  padding: ${props => props.theme.spacing.sm};
  text-align: center;
  cursor: pointer;
  border-radius: 4px;
  background: ${props => {
    if (props.selected) return props.theme.colors.primary;
    if (props.disabled) return props.theme.colors.lightBlue;
    return 'transparent';
  }};
  color: ${props => {
    if (props.selected) return props.theme.colors.accent;
    if (props.disabled) return props.theme.colors.text;
    return props.theme.colors.text;
  }};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const TimeSlots = styled.div`
  margin-top: ${props => props.theme.spacing.xl};
`;

const TimeSlot = styled.button`
  background: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.accent};
  color: ${props => props.selected ? props.theme.colors.accent : props.theme.colors.text};
  border: 1px solid ${props => props.theme.colors.lightBlue};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  margin-right: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  border-radius: 4px;
  cursor: pointer;
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

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const handleDateSelect = (day) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
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
    onSelectDate(appointmentDateTime);
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    
    const daysArray = [];
    
    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      daysArray.push(<DayCell key={`empty-${i}`} disabled></DayCell>);
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = selectedDate && selectedDate.getDate() === day && 
                         selectedDate.getMonth() === month && 
                         selectedDate.getFullYear() === year;
      daysArray.push(
        <DayCell 
          key={`day-${day}`} 
          selected={isSelected}
          onClick={() => handleDateSelect(day)}
        >
          {day}
        </DayCell>
      );
    }
    
    return daysArray;
  };

  return (
    <div>
      <button onClick={onBack}>Back</button>
      
      <h2>Select Date and Time</h2>
      <p>Appointment with {doctor?.name} for {appointmentType} consultation</p>
      
      <CalendarContainer>
        <CalendarHeader>
          <NavButton onClick={handlePrevMonth}><FaArrowLeft /></NavButton>
          <MonthYear>
            {currentMonth.toLocaleString('default', { month: 'long' })} {currentMonth.getFullYear()}
          </MonthYear>
          <NavButton onClick={handleNextMonth}><FaArrowRight /></NavButton>
        </CalendarHeader>
        
        <CalendarGrid>
          {days.map(day => (
            <DayHeader key={day}>{day}</DayHeader>
          ))}
          {renderCalendar()}
        </CalendarGrid>
      </CalendarContainer>
      
      {selectedDate && (
        <TimeSlots>
          <h3><FaClock /> Available Times</h3>
          {timeSlots.map(time => (
            <TimeSlot 
              key={time}
              selected={time === selectedTime}
              onClick={() => handleTimeSelect(time)}
            >
              {time}
            </TimeSlot>
          ))}
        </TimeSlots>
      )}
      
      {selectedTime && (
        <button onClick={onNext}>Next</button>
      )}
    </div>
  );
};

export default AppointmentCalendar;