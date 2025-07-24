import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled(motion.div)`
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 16px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  color: #6c63ff;
`;

const GuidelineList = styled.ul`
  list-style: inside disc;
  line-height: 1.5;
  color: #333;
  max-height: 300px;
  overflow-y: auto;
  padding-right: 10px;
`;

const GuidelineItem = styled.li`
  margin-bottom: 0.8rem;
`;

const ShowGuidelinesButton = styled.button`
  background: #6c63ff;
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 24px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 0 10px #6c63ffaa;
  transition: background 0.3s ease;

  &:hover {
    background: #5848c2;
  }
`;

const modalVariants = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 80, damping: 15 }},
  exit: { y: '100vh', opacity: 0, transition: { ease: 'easeInOut' } }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const CommunityGuidelines = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const viewed = localStorage.getItem('guidelinesViewed');
    if (!viewed) {
      setIsOpen(true);
      localStorage.setItem('guidelinesViewed', 'true');
    }
  }, []);

  return (
    <>
      <ShowGuidelinesButton onClick={() => setIsOpen(true)}>
        Community Guidelines
      </ShowGuidelinesButton>

      <AnimatePresence>
        {isOpen && (
          <Overlay
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setIsOpen(false)}
            aria-label="Close Community Guidelines"
          >
            <ModalContainer
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={e => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="guidelines-title"
            >
              <CloseButton onClick={() => setIsOpen(false)} aria-label="Close">&times;</CloseButton>
              <Title id="guidelines-title">Community Guidelines</Title>
              <GuidelineList>
                <GuidelineItem>Be respectful and kind to everyone.</GuidelineItem>
                <GuidelineItem>No hate speech, discrimination, or harassment.</GuidelineItem>
                <GuidelineItem>Keep discussions supportive and positive.</GuidelineItem>
                <GuidelineItem>Do not share personal information without consent.</GuidelineItem>
                <GuidelineItem>Report any harmful or inappropriate content.</GuidelineItem>
                <GuidelineItem>Stay on topic and contribute constructively.</GuidelineItem>
              </GuidelineList>
            </ModalContainer>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default CommunityGuidelines;
