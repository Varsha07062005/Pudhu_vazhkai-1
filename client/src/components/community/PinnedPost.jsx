import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaThumbtack } from 'react-icons/fa';

const PinnedContainer = styled(motion.div)`
  background: #ffe066;
  padding: 1rem;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 4px 12px rgba(255, 224, 102, 0.6);
`;

const Content = styled.div`
  font-weight: 600;
  color: #333;
`;

const PinnedPost = ({ post }) => {
  return (
    <PinnedContainer
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <FaThumbtack size={24} color="#333" />
      <Content>{post.content}</Content>
    </PinnedContainer>
  );
};

export default PinnedPost;
