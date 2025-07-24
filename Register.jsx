// File: src/pages/Register.jsx

import React, { useState } from 'react'; import { auth } from '../../firebase'; import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => { const [email, setEmail] = useState(''); const [password, setPassword] = useState(''); const [error, setError] = useState(null); const [success, setSuccess] = useState(false);

const handleRegister = async (e) => { e.preventDefault(); setError(null); setSuccess(false); try { await createUserWithEmailAndPassword(auth, email, password); setSuccess(true); } catch (err) { setError(err.message); } };

return ( <div className="p-4 max-w-sm mx-auto"> <h1 className="text-2xl font-bold mb-4">Register</h1> <form onSubmit={handleRegister} className="space-y-3"> <input type="email" placeholder="Email" className="w-full border px-3 py-2 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required /> <input type="password" placeholder="Password" className="w-full border px-3 py-2 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required /> <button
type="submit"
className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded"
> Create Account </button> </form> {success && <p className="text-green-600 mt-2">Account created successfully!</p>} {error && <p className="text-red-600 mt-2">{error}</p>} </div> ); };

export default Register;

