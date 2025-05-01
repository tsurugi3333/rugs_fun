'use client';

import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [caAddress, setCAAddress] = useState('');
  
  return (
    <div className="min-h-screen bg-white text-white flex flex-col">
      {/* Navigation bar */}
      <nav className="bg-black w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-12">
            <Link href="/" className="text-white font-bold text-4xl italic tracking-wider">
              <img src="/images/FREE DIDDY - logo.png" alt="" />
            </Link>
          </div>
        </div>
      </nav>  

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 mt-16">
        <div className="max-w-7xl w-full bg-white text-black  overflow-hidden border-1 border-black" 
        style={{boxShadow: '3px 3px 0 rgba(20, 20, 1, 3)',}}>
          <div className="flex flex-col md:flex-row relative">
            {/* Left Content */}
            <div className="flex-1 p-8 flex flex-col items-center text-center">
              <img src="/images/FREE DIDDY - title.png" alt="" className='mb-2' />
              <p className="uppercase font-extrabold text-md mb-6">CAN&apos;T STOP. WON&#39;T STOP. NOT EVEN JAIL CAN HOLD HIM.</p>
              <div className="text-center text-md"  style={{textShadow: '1px 1px 0 rgba(200, 200, 200, 8)',}}>
                <p className="uppercase font-semibold">THE MOVEMENT</p>
                <p className="">They tried to cancel a king.</p>
                <p className="">They thought the Bad Boy era was over.</p>
                <p className="">But they forgot one thing: the blockchain don&#39;t lie.</p>
                <p className="">$DIDDY isnt just a meme coin.</p>
                <p className="">It&#39;s a global signal—loyalty, freedom, and culture on-chain.</p>
                <p className="">A rally for the mogul. A reminder for the world:</p>
                <p className="">Real ones don&#39;t fold.</p>
              </div>
            </div>

            {/* Right Content - Person Image */}
            <div className="md:w-2/5 relative mt-10">
              <img 
                src="/images/loginpageimage.png" 
                alt="Person in white suit with sunglasses"
                className="h-full w-full object-cover"
              />
              
              {/* Buttons positioned over the image */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
                <Link href="/buy" className="bg-black text-white px-6 py-2 border-white border-2 rounded-lg flex items-center font-medium" style={{boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)',}}>
                  Buy Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Link>
                <Link href="/chart" className="bg-white text-black border-2 border-black px-6 py-2 rounded-lg font-medium" style={{boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)',}}>
                  Chart
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div className="max-w-6xl w-full mt-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex flex-col md:w-2/3 text-center items-center justify-center">   
              <div className="bg-white w-sm rounded-lg overflow-hidden flex mb-4 border-2 border-black" style={{boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)',}}>
                <span className="bg-white text-black px-3 py-2 font-medium">CA:</span>
                <input
                  type="text"
                  className="flex-1 py-2 text-black outline-none bg-white"
                  value={caAddress}
                  onChange={(e) => setCAAddress(e.target.value)}
                />
              </div>
              
              <Link
                href={"/home"}
                className="bg-black text-white w-full py-2 border-2 rounded-lg flex items-center justify-center font-medium" style={{boxShadow: '3px 3px 0 rgba(0, 0, 0, 8)',}}
              >
                Click here to sign petition
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
              </Link> 
            </div>

            <div className="md:w-1/3">
              <div className="py-4 text-black ">
                <div className="text-right flex flex-col text-center items-center justify-center">
                  <p className="font-semibold uppercase">THE MISSION</p>
                  <p className="">Flood the internet.</p>
                  <p className="">Make the memes.</p>
                  <p className="">Run it up.</p>
                  <p className="font-bold">#FreeDiddy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;