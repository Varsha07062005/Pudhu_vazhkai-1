import React, { useState } from 'react';
import styled from '@emotion/styled';
import CommunityPost from '../../components/community/CommunityPost';
import CreatePost from '../../components/community/CreatePost';
import TagFilterBar from '../../components/community/TagFilterBar';
import CommunityGuidelines from '../../components/community/CommunityGuidelines';
import AnnouncementsBanner from '../../components/community/AnnouncementsBanner';
import PinnedPost from '../../components/community/PinnedPost';
import UpcomingEvents from '../../components/community/UpcomingEvents';
import AchievementsBoard from '../../components/community/AchievementsBoard';

const CommunityContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const CommunityHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const ControlsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Sidebar = styled.div`
  margin-top: 2rem;
`;

const Community = () => {
  const [activeTag, setActiveTag] = useState('All');
  const [pinnedPost, setPinnedPost] = useState({
    id: 99,
    author: 'Admin',
    avatar: 'A',
    content: '🌟 Welcome to the TransCare Community! Check out the guidelines and upcoming events.',
    timestamp: 'Pinned',
    likes: 100,
    comments: 50,
    tags: ['Announcement']
  });

  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Alex',
      avatar: 'A',
      content: 'Just started my HRT journey today! So excited for what the future holds 💕',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 5,
      tags: ['Support']
    },
    {
      id: 2,
      author: 'Jamie',
      avatar: 'J',
      content: 'Does anyone have recommendations for trans-friendly therapists in the Seattle area?',
      timestamp: '1 day ago',
      likes: 8,
      comments: 12,
      tags: ['Queries']
    },
    {
      id: 3,
      author: 'Taylor',
      avatar: 'T',
      content: 'Join us for the Trans Pride march next weekend!',
      timestamp: '3 days ago',
      likes: 45,
      comments: 15,
      tags: ['Events']
    }
  ]);

  const handleCreatePost = (postData) => {
    const newPost = {
      id: posts.length + 1,
      author: 'You',
      avatar: 'Y',
      ...postData,
      likes: 0,
      comments: 0
    };
    setPosts([newPost, ...posts]);
  };

  const filteredPosts = activeTag === 'All' ? posts : posts.filter(post => post.tags.includes(activeTag));

  return (
    <CommunityContainer>
      <CommunityHeader>
        <h1>TransCare Community</h1>
        <p>A safe space to share, connect, and support each other</p>
      </CommunityHeader>

      <ControlsContainer>
        <TagFilterBar activeTag={activeTag} setActiveTag={setActiveTag} />
        <CommunityGuidelines />
      </ControlsContainer>

      <AnnouncementsBanner message="🎉 TransCare App v2.0 is LIVE! Check out new features and events." />

      <PinnedPost post={pinnedPost} />

      <CreatePost onCreate={handleCreatePost} />

      <PostsContainer>
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <CommunityPost key={post.id} post={post} />
          ))
        ) : (
          <p style={{ textAlign: 'center', marginTop: '2rem' }}>
            No posts found for "{activeTag}"
          </p>
        )}
      </PostsContainer>

      <Sidebar>
        <UpcomingEvents />
        <AchievementsBoard />
      </Sidebar>
    </CommunityContainer>
  );
};

export default Community;
