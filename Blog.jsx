// File: src/pages/Blog.jsx

import React from 'react';

const articles = [ { title: 'Top 5 Car Mods Under R500', description: 'Affordable mods that make your ride pop without breaking the bank.', link: '#' }, { title: 'Best First-Time Car Upgrades in Mzansi', description: 'Start your mod journey right with these Kasi-approved upgrades.', link: '#' }, { title: 'How to Clean Your Car Interior Like a Pro', description: 'Keep it fresh, keep it shining – without expensive gear.', link: '#' } ];

const Blog = () => { return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Car Tips & Mods Blog</h1> {articles.map((article, index) => ( <div key={index} className="bg-white dark:bg-gray-800 rounded shadow p-4 mb-4"> <h2 className="text-xl font-semibold text-red-600">{article.title}</h2> <p className="text-gray-700 dark:text-gray-300">{article.description}</p> <a href={article.link} className="text-blue-600 hover:underline">Read More</a> </div> ))} </div> ); };

export default Blog;

