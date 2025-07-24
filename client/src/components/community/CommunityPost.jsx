import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaHeart, FaRegHeart, FaComment, FaEllipsisH } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PostReactions from './PostReactions';
import CommentPreview from './CommentPreview';

const PostContainer = styled(motion.div)`
  background: linear-gradient(135deg, #a1c4fd, #c2e9fb);
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: #007bff;
  color: white;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

const TagsContainer = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 8px;
`;

const TagBadge = styled.span`
  background: ${props => {
    switch(props.tag) {
      case 'Support': return '#ff8a80';
      case 'Events': return '#80d8ff';
      case 'Queries': return '#ffd180';
      default: return '#ccc';
    }
  }};
  color: white;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  user-select: none;
  box-shadow: 0 0 5px rgba(0,0,0,0.1);
`;

const PostContent = styled.div`
  margin-bottom: 16px;
`;

const PostActions = styled.div`
  display: flex;
  gap: 16px;
`;

const ActionButton = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #333;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1rem;

  &.liked {
    color: #e0245e;
  }
`;

const CommunityPost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleReaction = (emoji) => {
    console.log(`Reacted with ${emoji}`);
  };

  const dummyComments = [
    'Love this!',
    'So happy for you!',
    'Sending support!'
  ];

  return (
    <PostContainer
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <PostHeader>
        <AuthorInfo>
          <AuthorAvatar>{post.avatar}</AuthorAvatar>
          <div>
            <strong>{post.author}</strong><br />
            <small>{post.timestamp}</small>
          </div>
        </AuthorInfo>
        <button><FaEllipsisH /></button>
      </PostHeader>

      <PostContent>{post.content}</PostContent>

      <TagsContainer>
        {post.tags && post.tags.map((tag, i) => (
          <TagBadge key={i} tag={tag}>{tag}</TagBadge>
        ))}
      </TagsContainer>

      <PostActions>
        <ActionButton
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleLike}
          className={liked ? 'liked' : ''}
        >
          {liked ? <FaHeart /> : <FaRegHeart />} {likeCount}
        </ActionButton>
        <ActionButton whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
          <FaComment /> {post.comments}
        </ActionButton>
      </PostActions>

      <PostReactions onReact={handleReaction} />
      <CommentPreview initialComments={dummyComments} />

    </PostContainer>
  );
};

export default CommunityPost;
