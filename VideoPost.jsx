// File: src/components/VideoPost.jsx

import React, { useState } from 'react';

const VideoPost = ({ user, caption, videoUrl, likes, comments }) => { const [likeCount, setLikeCount] = useState(likes); const [commentList, setCommentList] = useState(comments); const [newComment, setNewComment] = useState('');

const handleLike = () => setLikeCount(prev => prev + 1);

const handleComment = () => { if (newComment.trim()) { setCommentList(prev => [...prev, newComment]); setNewComment(''); } };

return ( <div className="bg-white dark:bg-gray-800 p-4 rounded shadow"> <p className="font-bold">@{user}</p> <p className="mb-2">{caption}</p> <video controls className="w-full max-h-80 mb-2"> <source src={videoUrl} type="video/mp4" /> Your browser does not support the video tag. </video> <button onClick={handleLike} className="text-red-600 font-semibold mr-4">❤️ {likeCount}</button> <div className="mt-2"> <input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)} className="border px-2 py-1 rounded w-2/3" placeholder="Add a comment..." /> <button onClick={handleComment} className="ml-2 px-2 py-1 bg-gray-700 text-white rounded"> Comment </button> </div> <ul className="mt-2 space-y-1"> {commentList.map((c, i) => <li key={i} className="text-sm">💬 {c}</li>)} </ul> </div> ); };

export default VideoPost;

