// File: src/components/Navbar.jsx

import React from 'react'; import { Link } from 'react-router-dom';

const Navbar = () => { return ( <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center"> <Link to="/" className="text-2xl font-bold text-red-600">VRRPHA</Link> <div className="space-x-4"> <Link to="/" className="hover:underline">Home</Link> <Link to="/marketplace" className="hover:underline">Marketplace</Link> <Link to="/social" className="hover:underline">Social</Link> <Link to="/profile" className="hover:underline">Profile</Link> </div> </nav> ); };

export default Navbar;

