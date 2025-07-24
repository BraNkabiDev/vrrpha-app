// File: src/pages/Home.jsx

import React from 'react'; import { Link } from 'react-router-dom';

const Home = () => { return ( <div className="p-6 text-center space-y-8"> <h1 className="text-4xl font-bold text-red-600">VrrPha Social Garage 🚗🔥</h1> <p className="text-lg text-gray-600 dark:text-gray-300">Where kasi car lovers flex their rides.</p>

<Link
    to="/social"
    className="inline-block bg-red-600 text-white text-lg px-6 py-3 rounded-full hover:bg-red-700"
  >
    🔥 Explore Builds Now
  </Link>

  <div className="mt-10 max-w-lg mx-auto text-gray-700 dark:text-gray-300">
    <p className="text-xl">Show off your whip, see what other okes are doing, and mod like a king.</p>
    <ul className="mt-4 space-y-2 text-left">
      <li>🚘 Upload videos & photos of your car mods</li>
      <li>💬 Like, comment & follow your car crew</li>
      <li>🛒 Buy & sell parts in the Marketplace</li>
    </ul>
  </div>

  <div className="mt-12">
    <Link
      to="/register"
      className="text-white bg-black px-6 py-2 rounded hover:bg-gray-900"
    >
      Join the Movement
    </Link>
  </div>
</div>

); };

export default Home;

