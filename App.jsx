// File: src/App.jsx

import React from 'react'; import { Routes, Route } from 'react-router-dom'; import Navbar from './components/Navbar'; import Footer from './components/Footer'; import Home from './pages/Home'; import Login from './pages/Login'; import Register from './pages/Register'; import Profile from './pages/Profile'; import Blog from './pages/Blog'; import Marketplace from './pages/Marketplace'; import Social from './pages/Social'; import NotFound from './pages/NotFound'; import { AuthProvider, useAuth } from './context/AuthContext';

const ProtectedRoute = ({ children }) => { const { user } = useAuth(); return user ? children : <Login />; };

const App = () => { return ( <AuthProvider> <div className="min-h-screen flex flex-col"> <Navbar /> <main className="flex-grow"> <Routes> <Route path="/" element={<Home />} /> <Route path="/login" element={<Login />} /> <Route path="/register" element={<Register />} /> <Route path="/profile" element={ <ProtectedRoute> <Profile /> </ProtectedRoute> } /> <Route path="/blog" element={<Blog />} /> <Route path="/marketplace" element={<Marketplace />} /> <Route path="/social" element={<Social />} /> <Route path="*" element={<NotFound />} /> </Routes> </main> <Footer /> </div> </AuthProvider> ); };

export default App;

