// File: src/pages/Social.jsx

import React, { useState } from 'react';
import VideoPost from '../components/VideoPost';

const Social = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'CarGuy01',
      caption: 'Check out my GTI stance!',
      videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      likes: 12,
      comments: ['🔥🔥', 'That fitment!']
    },
    {
      id: 2,
      user: 'StreetQueen',
      caption: '5-min mod with LEDs! 💡',
      videoUrl: 'https://www.w3schools.com/html/movie.mp4',
      likes: 8,
      comments: ['Where did you get those?', 'Clean install!']
    }
  ]);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Social Feed</h1>
      {posts.map(post => (
        <VideoPost key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Social;