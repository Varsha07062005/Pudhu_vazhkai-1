import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const ReactionsContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
`;

const EmojiButton = styled(motion.button)`
  font-size: 1.4rem;
  background: transparent;
  border: none;
  cursor: pointer;
  user-select: none;
  padding: 4px;

  &.selected {
    transform: scale(1.4);
    filter: drop-shadow(0 0 4px #ff4081);
  }
`;

const emojis = ['❤️', '🔥', '😮', '😢', '👏'];

const PostReactions = ({ onReact }) => {
  const [selected, setSelected] = useState(null);

  const handleClick = (emoji) => {
    if (selected === emoji) {
      setSelected(null); // Deselect if clicking same emoji
      onReact(null);
    } else {
      setSelected(emoji);
      onReact(emoji);
    }
  };

  return (
    <ReactionsContainer>
      {emojis.map((emoji) => (
        <EmojiButton
          key={emoji}
          onClick={() => handleClick(emoji)}
          className={selected === emoji ? 'selected' : ''}
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.2 }}
          aria-label={`React with ${emoji}`}
        >
          {emoji}
        </EmojiButton>
      ))}
    </ReactionsContainer>
  );
};

export default PostReactions;
