'use client'

export default function Hero() {
  const tokenAddress = "Coming soon"; // Replace with your actual token address
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress)
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  return (
    <div className="relative min-h-240 hero-bg top-16 flex items-center justify-center overflow-hidden">

      <div className="container mx-auto px-4 z-20 text-center md:text-right">
        <div className="max-w-3xl ml-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 diddy-title text-white">
            <img src="/images/Heading 2 → ABOUT STICKSY.png" alt="" />
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-white font-semibold">
            <img src="/images/TOKEN ADDRESS.png" alt="token address" />
          </p>
          <div className="w-3/4 bg-white rounded-lg px-4 py-2 border border-black border-3"
                style={{boxShadow: '3px 3px 4px rgba(0, 0, 0, 4)'}}>
            <div className="flex items-center w-full">
              <input
                type="text"
                value={tokenAddress}
                readOnly
                className="w-full bg-white rounded-sm border-1 border-white px-4 text-gray-600"
              />
              <button
                onClick={copyToClipboard}
                className="bg-black text-white rounded-sm px-4 py-3 font-bold hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <img src="/images/COPY ADDRESS.png" alt="" />
              </button>
            </div>
          </div>
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