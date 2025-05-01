import React from 'react';

interface AboutProps {
  fullPage?: boolean;
}

export default function About({ fullPage = false }: AboutProps) {
  return (
    <section id="about" className={`py-16 bg-white text-black ${fullPage ? 'pt-24' : ''}`}>
      <div className="container flex flex-col justfy-center items-center mx-auto">
        <img src="/images/Heading 2 → ABOUT STICKSY (1).png" alt="" className='mb-4' width={1000}/>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl mb-6 text-center font-bold">
            $DIDDY isn't just a meme coin—it's a decentralized rally cry.<br />
            For culture. For freedom. For anyone who ever danced to "Mo Money Mo Problems."<br />
            This is the moment we ride. For the mogul. For the memes.
          </p>
          
          <div className="relative mt-12 bg-white rounded-xl p-6 border-2 border-black overflow-visible"
            style={{ 
              boxShadow: '3px 3px 0 rgba(0, 0, 0, 4)',
            }}
          >
            {/* Floating "COMMUNITY" Label */}
            <h3 className="absolute -top-4 left-4 bg-black text-white text-sm font-bold px-2 py-1 shadow-md">
              <img src="/images/Community.png" alt=""/>
            </h3>

            <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                  <img src="/images/Heading 3 → STICKSY'S NOTE BOARD.png" alt=""/>
                  <p className="mb-4 mt-4 text-lg font-bold">Let's save the trenches, join our community now</p>
                  <a 
                      href="https://telegram.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-black text-white font-bold py-2 px-6 rounded-md inline-block"
                  >
                      <img src="/images/Join Telegram.png" alt=""/>
                  </a>
                </div>

                {/* Overflowing Character Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                  <img 
                      src="/images/noteplacing.png.png" 
                      alt="Diddy" 
                      className="object-contain"
                  />
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
