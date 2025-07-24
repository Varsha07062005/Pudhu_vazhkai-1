import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Banner = styled(motion.div)`
  background: #6c63ff;
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 12px rgba(108, 99, 255, 0.4);
  margin-bottom: 1.5rem;
  cursor: pointer;
`;

const Message = styled.div`
  font-weight: 600;
  font-size: 1rem;
  flex: 1;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  padding: 0;
  margin-left: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4081;
  }
`;

const bannerVariants = {
  hidden: { y: '-100%', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100, damping: 15 } },
  exit: { y: '-100%', opacity: 0, transition: { ease: 'easeInOut' } }
};

const AnnouncementsBanner = ({ message, onDismiss }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem('announcementDismissed');
    if (dismissed === 'true') {
      setVisible(false);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    localStorage.setItem('announcementDismissed', 'true');
    if (onDismiss) onDismiss();
  };

  return (
    <AnimatePresence>
      {visible && (
        <Banner
          variants={bannerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          role="alert"
          aria-live="polite"
          onClick={handleDismiss}
        >
          <Message>{message}</Message>
          <CloseBtn aria-label="Dismiss announcement" onClick={(e) => { e.stopPropagation(); handleDismiss(); }}>
            <FaTimes />
          </CloseBtn>
        </Banner>
      )}
    </AnimatePresence>
  );
};

export default AnnouncementsBanner;
