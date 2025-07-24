// File: src/pages/Profile.jsx

import React from 'react'; import { useAuth } from '../context/AuthContext';

const Profile = () => { const { user } = useAuth();

if (!user) { return <div className="p-4">Please log in to view your profile.</div>; }

return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Your Profile</h1> <p><strong>Email:</strong> {user.email}</p> <p><strong>UID:</strong> {user.uid}</p> {/* Add likes, follows, uploaded posts, etc here later */} </div> ); };

export default Profile;

