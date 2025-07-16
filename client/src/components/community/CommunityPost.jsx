import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaHeart, FaRegHeart, FaComment, FaEllipsisH } from 'react-icons/fa';

const PostContainer = styled.div`
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  padding: ${props => props.theme.spacing.md};
  box-shadow: ${props => props.theme.shadows.small};
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => props.theme.spacing.md};
`;

const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.sm};
`;

const AuthorAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.lightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${props => props.theme.colors.primary};
`;

const AuthorName = styled.div`
  font-weight: 600;
`;

const PostTime = styled.div`
  font-size: 0.8rem;
  color: ${props => props.theme.colors.text};
  opacity: 0.7;
`;

const PostContent = styled.div`
  margin-bottom: ${props => props.theme.spacing.md};
`;

const PostActions = styled.div`
  display: flex;
  gap: ${props => props.theme.spacing.md};
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${props => props.theme.spacing.xs};
  background: transparent;
  border: none;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  
  &.liked {
    color: ${props => props.theme.colors.primary};
  }
`;

const CommunityPost = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <PostContainer>
      <PostHeader>
        <AuthorInfo>
          <AuthorAvatar>{post.avatar}</AuthorAvatar>
          <div>
            <AuthorName>{post.author}</AuthorName>
            <PostTime>{post.timestamp}</PostTime>
          </div>
        </AuthorInfo>
        <button>
          <FaEllipsisH />
        </button>
      </PostHeader>
      
      <PostContent>
        {post.content}
      </PostContent>
      
      <PostActions>
        <ActionButton 
          onClick={handleLike}
          className={liked ? 'liked' : ''}
        >
          {liked ? <FaHeart /> : <FaRegHeart />} {likeCount}
        </ActionButton>
        <ActionButton>
          <FaComment /> {post.comments}
        </ActionButton>
      </PostActions>
    </PostContainer>
  );
};

export default CommunityPost;