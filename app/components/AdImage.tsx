import { Bangers } from 'next/font/google';

const bangers = Bangers({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function AdImage() {
    return (
      <div className="relative w-full">
        {/* Background image container with proper sizing */}
        <div className="w-full relative">
          <img 
            src="/images/Section1.png" 
            alt="Background" 
            className="w-full h-auto object-cover min-h-[300px] sm:min-h-[400px] md:min-h-[500px]"
          />
          
          <div className="absolute inset-0">
            <div className="absolute left-4 sm:left-8 md:left-10 top-8 sm:top-12 md:top-20 w-2/3 sm:w-3/5 md:w-1/2 lg:w-2/5">
              <img 
                src="/images/communi.png" 
                alt="Community" 
                className="w-30 xs:w-40 sm:w-60 md:w-90 lg:w-100 h-auto"
              />
            </div>
            
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10 lg:bottom-16 lg:right-12">
              <div 
                className="bg-white border-2 border-black rounded-lg p-2 sm:p-3 md:py-4 md:px-20 shadow-lg" 
                style={{boxShadow: '5px 5px 2px rgba(0, 0, 0, 4)'}}
              >
                <button className="bg-black rounded-lg px-8 sm:py-3 sm:px-6 hover:bg-gray-800 transition-colors ">
                  <a href="https://x.com/diddymemes">
                    <h2 className={`${bangers.className} text-[36px] leading-[36px] tracking-[1.2px] text-white uppercase items-center px-10`}>
                        Join x
                    </h2>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}  