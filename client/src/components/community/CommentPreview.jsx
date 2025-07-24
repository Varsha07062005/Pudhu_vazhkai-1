import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';

const PreviewContainer = styled(motion.div)`
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
`;

const Comment = styled.div`
  padding: 4px 0;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;

  &:last-child {
    border-bottom: none;
  }
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CommentPreview = ({ initialComments = [] }) => {
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = (e) => {
    if (e.key === 'Enter' && newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <PreviewContainer
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <AnimatePresence>
        {comments.slice(0, 3).map((comment, index) => (
          <Comment
            key={index}
            as={motion.div}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
          >
            {comment}
          </Comment>
        ))}
      </AnimatePresence>
      {comments.length > 3 && <em>View more comments...</em>}
      <CommentInput
        type="text"
        placeholder="Add a comment..."
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onKeyDown={handleAddComment}
      />
    </PreviewContainer>
  );
};

export default CommentPreview;
