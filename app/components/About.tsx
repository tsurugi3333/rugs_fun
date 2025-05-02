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
          <p className="text-xl mb-6 text-center font-bold mt-10">
            $DIDDY isn&apos;t just a meme coin—it&apos;s a decentralized rally cry.<br />
            For culture. For freedom. For anyone who ever danced to &quot;Mo Money Mo Problems.&quot;<br />
            This is the moment we ride. For the mogul. For the memes.
          </p>
        </div>
      </div>
    </section>
  );
}
