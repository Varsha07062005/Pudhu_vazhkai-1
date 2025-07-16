import React, { useState } from 'react';
import styled from '@emotion/styled';
import CommunityPost from '../../components/community/CommunityPost';
import CreatePost from '../../components/community/CreatePost';
const CommunityContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.md};
`;

const CommunityHeader = styled.div`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.xl};
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex',
      avatar: 'A',
      content: 'Just started my HRT journey today! So excited for what the future holds 💕',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5
    },
    {
      id: 2,
      author: 'Jamie',
      avatar: 'J',
      content: 'Does anyone have recommendations for trans-friendly therapists in the Seattle area?',
      timestamp: '1 day ago',
      likes: 8,
      comments: 12
    }
  ]);

  const handleCreatePost = (content) => {
    const newPost = {
      id: posts.length + 1,
      author: 'You',
      avatar: 'Y',
      content,
      timestamp: 'Just now',
      likes: 0,
      comments: 0
    };
    setPosts([newPost, ...posts]);
  };

  return (
    <CommunityContainer>
      <CommunityHeader>
        <h1>TransCare Community</h1>
        <p>A safe space to share, connect, and support each other</p>
      </CommunityHeader>
      
      <CreatePost onCreate={handleCreatePost} />
      
      <PostsContainer>
        {posts.map(post => (
          <CommunityPost key={post.id} post={post} />
        ))}
      </PostsContainer>
    </CommunityContainer>
  );
};

export default Community;