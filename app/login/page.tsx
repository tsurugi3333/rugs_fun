'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  
  const handleSignPetition = () => {
    // Handle petition signing functionality
    console.log('Signing petition with email:', email);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Header */}
      <header className="p-4">
        <div className="max-w-xs">
          <Image 
            src="/images/freediddy-logo.png" 
            alt="FREE DIDDY" 
            width={150} 
            height={40}
            className="object-contain"
          />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4">
        <div className="max-w-4xl w-full bg-white text-black rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Left Content */}
            <div className="flex-1 p-8 flex flex-col items-center text-center">
              <h1 className="text-6xl font-black italic tracking-tighter mb-2">FREE DIDDY</h1>
              <p className="uppercase font-bold mb-6">CAN'T STOP. WON'T STOP. NOT EVEN JAIL CAN HOLD HIM.</p>
              
              <div className="space-y-2 mb-6">
                <p className="uppercase font-semibold">THE MOVEMENT</p>
                <p>They tried to cancel a king.</p>
                <p>They thought the Bad Boy era was over.</p>
                <p>But they forgot one thing: the blockchain don't lie.</p>
                <p>$DIDDY isn't just a meme coin.</p>
                <p>It's a global signal—loyalty, freedom, and culture on-chain.</p>
                <p>A rally for the mogul. A reminder for the world:</p>
                <p>Real ones don't fold.</p>
              </div>

              <div className="flex gap-4 justify-center">
                <Link href="/buy" className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
                  Buy Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <Link href="/chart" className="border border-black text-black px-6 py-2 rounded-lg">
                  Chart
                </Link>
              </div>
            </div>

            {/* Right Content - Person Image */}
            <div className="md:w-1/3 flex items-center justify-center bg-white">
              <div className="relative h-full w-full">
                <Image 
                  src="/images/diddy-image.png" 
                  alt="Person in white suit with sunglasses" 
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-4xl w-full mt-8 mb-16">
          <div className="bg-white rounded-full overflow-hidden p-1 flex mb-4">
            <span className="bg-white text-black px-3 py-2 font-semibold">CA:</span>
            <input
              type="text"
              className="flex-1 px-4 py-2 text-black outline-none bg-white"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          
          <button 
            onClick={handleSignPetition}
            className="bg-black text-white w-full py-3 rounded-full flex items-center justify-center font-semibold"
          >
            Click here to sign petition
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </button>
        </div>
      </main>

      {/* Mission Section */}
      <div className="py-4 px-8 bg-black">
        <div className="max-w-4xl mx-auto text-right">
          <p className="font-semibold">THE MISSION</p>
          <p>Flood the internet.</p>
          <p>Make the memes.</p>
          <p>Run it up.</p>
          <p className="font-bold">#FreeDiddy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;