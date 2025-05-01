import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 z-0 hero-bg"></div>
        </div>
      </div>

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
          <Link href="/how-to-buy" className="diddy-button text-center max-w-40">
            <img src="/images/join the movement.png" alt="" />
          </Link>
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
