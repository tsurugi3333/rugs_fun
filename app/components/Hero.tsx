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
        <div className="max-w-3xl ml-auto flex flex-col items-center md:items-end">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 diddy-title text-white">
            FREE<br/>DIDDY
          </h1>
          <p className="text-xl md:text-2xl mb-2 text-white font-semibold">
            RESURRECTING ICONIC ENERGY
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80">
            ACROSS THE BLOCKCHAIN
          </p>
          <Link href="/how-to-buy" className="diddy-button text-center max-w-40">
            JOIN THE <br /> MOVEMENT
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden bg-black z-30">
        <div className="marquee whitespace-nowrap text-white font-extrabold uppercase py-2 px-4 text-sm md:text-lg flex">
            <div className="marquee-content flex shrink-0">
            {Array(20).fill('FREE DIDDY').map((text, i) => (
                <span key={`a-${i}`} className="mx-4">{text}</span>
            ))}
            </div>
            <div className="marquee-content flex shrink-0">
            {Array(20).fill('FREE DIDDY').map((text, i) => (
                <span key={`b-${i}`} className="mx-4">{text}</span>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
}
