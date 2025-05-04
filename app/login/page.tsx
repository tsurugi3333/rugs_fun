'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const LoginPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  
  const correctPassword = 'Fr33!D!ddy_#123xY';  
  
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (password === correctPassword) {
      router.push('/home');
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation bar */}
      <nav className="bg-black w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            <Link href="/" className="text-white font-bold text-xl diddy-title">
              <img src="/images/$Diddy.png" alt=""/>
            </Link>
          </div>
        </div>
      </nav>  

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white text-black p-8 rounded-lg border-2 border-black"
          style={{boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)'}}>
          
          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-6">
              <img src="/images/FREE DIDDY - title.png" alt="Title" className="mx-auto mb-4" />
              <h2 className="text-xl font-bold">Access Required</h2>
              <p className="text-gray-600">Enter the password to continue</p>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border-2 border-black rounded-md focus:outline-none"
                required
              />
              {error && (
                <p className="text-red-600 text-sm mt-1">{error}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-black text-white py-2 border-2 border-black rounded-lg font-medium"
              style={{boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)'}}
            >
              Enter Site
            </button>
            
            <div className="text-center text-sm text-gray-600 mt-4">
              <p>$FreeDiddy$</p>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;