import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const tags = ['All', 'Support', 'Events', 'Queries'];

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TagButton = styled(motion.button)`
  padding: 0.5rem 1rem;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  background: ${({ active, theme }) => (active ? theme.colors.primary : '#eee')};
  color: ${({ active, theme }) => (active ? 'white' : '#333')};
  box-shadow: ${({ active }) => (active ? '0 0 10px #6c63ffaa' : 'none')};
  transition: background 0.3s ease;

  &:hover {
    background: ${({ active, theme }) => (active ? theme.colors.primary : '#ddd')};
  }
`;

const TagFilterBar = ({ activeTag, setActiveTag }) => {
  return (
    <FilterBar>
      {tags.map(tag => (
        <TagButton
          key={tag}
          active={activeTag === tag}
          onClick={() => setActiveTag(tag)}
          whileTap={{ scale: 0.9 }}
        >
          {tag}
        </TagButton>
      ))}
    </FilterBar>
  );
};

export default TagFilterBar;
