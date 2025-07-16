import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaPaperPlane } from 'react-icons/fa';

const PostForm = styled.form`
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.small};
  margin-bottom: ${props => props.theme.spacing.lg};
`;

const PostInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid ${props => props.theme.colors.lightBlue};
  border-radius: 4px;
  padding: ${props => props.theme.spacing.sm};
  margin-bottom: ${props => props.theme.spacing.sm};
  resize: vertical;
  font-family: inherit;
`;

const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 4px;
  cursor: pointer;
`;

const CreatePost = ({ onCreate }) => {
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (content.trim()) {
      onCreate(content);
      setContent('');
    }
  };

  return (
    <PostForm onSubmit={handleSubmit}>
      <PostInput
        placeholder="Share your thoughts with the community..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitButton type="submit">
        <FaPaperPlane /> Post
      </SubmitButton>
    </PostForm>
  );
};

export default CreatePost;