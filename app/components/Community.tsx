import React from 'react';
import { FaTwitter, FaTelegram } from 'react-icons/fa';

interface CommunityProps {
  fullPage?: boolean;
}

export default function Community({ fullPage = false }: CommunityProps) {
  return (
    <section id="community" className={`py-16 bg-black ${fullPage ? 'pt-24' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center diddy-title">COMMUNITY</h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 border-3 border-black">
          <div className="bg-zinc-900  rounded-xl p-6 border border-zinc-800">
            <h3 className="text-xl font-bold mb-4 bg-black inline-block px-4 py-1 -mt-9">MARKETING</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span>Social Media Reach</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span>X Spaces</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span>Huge Partnerships</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 rounded-full bg-blue-500 mr-3"></div>
                <span>CEX Listings</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <span>and much more...</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 relative">
            <h3 className="text-xl font-bold mb-4 bg-black inline-block px-4 py-1 -mt-9">CHALLENGE</h3>
            <div className="flex flex-col items-start">
              <h4 className="text-2xl font-bold mb-2">100X CHALLENGE</h4>
              <p className="mb-6">Are you ready to be part of the greatest call in crypto history?</p>
              <a href="#" className="bg-black rounded-md px-3 py-2 text-white">BUY $DIDDY</a>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FaTwitter size={16} />
                </div>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-white">
                <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                  <FaTelegram size={16} />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
