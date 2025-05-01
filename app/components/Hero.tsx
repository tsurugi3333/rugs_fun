'use client'

export default function Hero() {
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; 
      const offsetPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative min-h-screen hero-bg mt-16 flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 z-20 text-center md:text-right">
        <div className="max-w-3xl ml-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 diddy-title text-white">
            <img src="/images/Heading 2 → ABOUT STICKSY.png" alt="" />
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-white font-semibold">
            <img src="/images/Resurrecting Iconic energy.png" alt="" />
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80">
           <img src="/images/across the blockchain.png" alt="" />
          </p>
          <button 
              onClick={() => scrollToSection('how-to-buy')} 
              className="bg-white rounded-lg px-3 py-2 border-2 border-black text-white hover:text-gray-300 transition-colors cursor-pointer"
              style={{boxShadow: '3px 3px 2px rgba(100, 100, 100, 3)'}}
            >
              <img src="/images/join the movement.png" alt="" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden bg-black z-30">
        <div className="marquee whitespace-nowrap text-white font-extrabold uppercase py-2 px-4 text-sm md:text-lg flex">
            <div className="marquee-content flex shrink-0 italic">
            {Array(20).fill('FREE DIDDY').map((text, i) => (
                <span key={`a-${i}`} className="mx-4">{text}</span>
            ))}
            </div>
            <div className="marquee-content flex shrink-0 italic">
            {Array(20).fill('FREE DIDDY').map((text, i) => (
                <span key={`b-${i}`} className="mx-4">{text}</span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}