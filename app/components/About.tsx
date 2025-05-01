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
            $DIDDY isn&apos;t just a meme coin—it&apos;s a decentralized rally cry.<br />
            For culture. For freedom. For anyone who ever danced to &quot;Mo Money Mo Problems.&quot;<br />
            This is the moment we ride. For the mogul. For the memes.
          </p>
          
          <div className="relative max-w-2xl mt-12 mx-auto text-center bg-white rounded-xl p-6 border-2 border-black overflow-visible"
            style={{ 
              boxShadow: '3px 3px 3px rgba(0, 0, 0, 4)',
            }}
          >
            {/* Floating "COMMUNITY" Label */}
            <h3 className="absolute -top-4 left-4 bg-black text-white text-sm font-bold px-2 py-1 shadow-md">
              <img src="/images/Community.png" alt=""/>
            </h3>

            <div className="flex flex-col md:flex-row sm:flex-row justify-between items-center mt-20 relative z-10">
              {/* Text Content */}
              <div className="w-full md:w-1/2 sm:w-1/2 mb-15 flex sm:z-10 xs:z-10">
                <a 
                  href="https://x.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black text-white font-bold py-2 px-24 mx-5 rounded-md inline-block md:z-1 sm:z-1"
                >
                  <img src="/images/Join X.png" alt=""/>
                </a>
              </div>

              {/* Overflowing Character Image - Hidden on screens smaller than sm (640px) */}
              <div className="hidden sm:flex w-full md:w-1/2 sm:w-1/2 sm:z-0 justify-center md:justify-end absolute -mt-13 -right-18">
                <img 
                  src="/images/noteplacing.png.png" 
                  alt="Diddy" 
                  className="object-contain md:z-0 sm:z-0"
                  width={360}
                />
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
