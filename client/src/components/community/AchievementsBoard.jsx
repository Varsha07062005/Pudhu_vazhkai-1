import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaMedal } from 'react-icons/fa';

const AchievementsContainer = styled.div`
  background: #f3e5f5;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(156, 39, 176, 0.4);
`;

const Badge = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.8rem;
  font-weight: 500;
  color: #6a1b9a;
`;

const AchievementsBoard = () => {
  const achievements = [
    '💬 First Post Badge',
    '🌟 100 Likes Received',
    '🎯 Active Contributor'
  ];

  return (
    <AchievementsContainer>
      <h3>🏅 Your Achievements</h3>
      {achievements.map((badge, idx) => (
        <Badge
          key={idx}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: idx * 0.2 }}
        >
          <FaMedal /> {badge}
        </Badge>
      ))}
    </AchievementsContainer>
  );
};

export default AchievementsBoard;
