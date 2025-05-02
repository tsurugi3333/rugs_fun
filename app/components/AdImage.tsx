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
                className="w-full h-auto"
              />
            </div>
            
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-10 lg:bottom-16 lg:right-12">
              <div 
                className="bg-white border-2 border-black rounded-lg p-2 sm:p-3 md:py-4 md:px-10 shadow-lg" 
                style={{boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.4)'}}
              >
                <button className="bg-black rounded-lg py-2 px-4 sm:py-3 sm:px-6 hover:bg-gray-800 transition-colors">
                  <a href="https://x.com">
                    <img 
                      src="/images/Join X (1).png" 
                      alt="Join X" 
                      className="h-5 sm:h-6 md:h-8 w-auto"
                    />
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}  