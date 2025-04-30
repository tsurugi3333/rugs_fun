import React from 'react';

interface AboutProps {
  fullPage?: boolean;
}

export default function About({ fullPage = false }: AboutProps) {
  return (
    <section id="about" className={`py-16 bg-white text-black ${fullPage ? 'pt-24' : ''}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center diddy-title">FREE DIDDY</h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-xl mb-6 text-center">
            $DIDDY isn't just a meme coin—it's a decentralized rally cry.<br />
            For culture. For freedom. For anyone who ever danced to "Mo Money Mo Problems."<br />
            This is the moment we ride. For the mogul. For the memes.
          </p>
          
          <div className="relative mt-12 bg-white rounded-xl p-6 border-4 border-black overflow-visible">
            {/* Floating "COMMUNITY" Label */}
            <h3 className="absolute -top-4 left-4 bg-black text-white text-sm font-bold px-4 py-1 shadow-md">
                COMMUNITY
            </h3>

            <div className="flex flex-col md:flex-row justify-between items-center relative z-10">
                {/* Text Content */}
                <div className="w-full md:w-1/2">
                <h4 className="text-2xl font-bold mb-2">DIAMOND DIDDY CLUB</h4>
                <p className="mb-4">Let's save the trenches, join our community now</p>
                <a 
                    href="https://telegram.org" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-black text-white font-bold py-2 px-6 rounded-md inline-block"
                >
                    JOIN TELEGRAM
                </a>
                </div>

                {/* Overflowing Character Image */}
                <div className="w-full md:w-1/2 flex justify-center md:justify-end relative">
                <img 
                    src="/images/noteplacing.png.png" 
                    alt="Diddy" 
                    className="max-h-[220px] object-contain absolute md:static right-[-50px] md:right-[-80px] bottom-[-20px] md:bottom-[-30px]"
                />
                </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
}
