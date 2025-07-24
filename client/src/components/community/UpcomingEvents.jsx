import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const EventsContainer = styled.div`
  background: #e0f7fa;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 188, 212, 0.4);
`;

const EventItem = styled(motion.div)`
  margin-bottom: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const UpcomingEvents = () => {
  const events = [
    { id: 1, title: 'TransCare Meetup - Aug 12' },
    { id: 2, title: 'Webinar: Healthcare Rights - Aug 20' },
    { id: 3, title: 'Pride March Rally - Sept 3' }
  ];

  return (
    <EventsContainer>
      <h3>📅 Upcoming Events</h3>
      {events.map(event => (
        <EventItem
          key={event.id}
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: event.id * 0.2 }}
        >
          <FaCalendarAlt /> {event.title}
        </EventItem>
      ))}
    </EventsContainer>
  );
};

export default UpcomingEvents;
