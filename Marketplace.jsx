// File: src/pages/Marketplace.jsx

import React, { useState } from 'react';

const Marketplace = () => { const [items, setItems] = useState([ { id: 1, name: 'LED Headlights', price: 'R250', sold: false }, { id: 2, name: 'GTI Spoiler', price: 'R450', sold: false }, { id: 3, name: 'Car Air Freshener', price: 'R50', sold: false }, ]);

const markAsSold = (id) => { setItems(items.map(item => item.id === id ? { ...item, sold: true } : item )); };

return ( <div className="p-4"> <h1 className="text-2xl font-bold mb-4">Marketplace</h1> {items.map(item => ( <div key={item.id} className="border p-2 mb-2 rounded bg-white shadow"> <p className="text-lg">{item.name}</p> <p className="text-sm">{item.price}</p> {!item.sold ? ( <button onClick={() => markAsSold(item.id)} className="mt-2 px-4 py-1 bg-yellow-600 text-white rounded" > Mark as Sold </button> ) : ( <span className="text-green-600 font-bold">SOLD</span> )} </div> ))} </div> ); };

export default Marketplace;

