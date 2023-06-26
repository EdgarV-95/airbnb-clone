import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/register', { name, email, password });
      setRedirect(true);
    } catch (e) {
      alert('failed');
    }
  };

  if (
    redirect &&
    name.length > 0 &&
    email.length > 0 &&
    password.length > 0
  ) {
    return <Navigate to={'/login'} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Create account</button>
          <div className="text-center py-2 text-gray-500">
            Already a member? {'->'}{' '}
            <Link className="underline text-black" to={'/login'}>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
