import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';

const PostForm = styled(motion.form)`
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 24px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
`;

const PostInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid #ff6f91;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 12px;
  resize: vertical;
  font-family: inherit;
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 8px;
  background: #ff6f91;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
  }
`;

const CreatePost = ({ onCreate }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreate({ content, timestamp: 'Just now' });
      setContent('');
    }
  };

  return (
    <PostForm
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <PostInput
        placeholder="Share your thoughts..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitButton
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
      >
        <FaPaperPlane /> Post
      </SubmitButton>
    </PostForm>
  );
};

export default CreatePost;
