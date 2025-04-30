export default function AdImage() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 z-0 adImage-bg"></div>
        </div>
      </div>
    </div>
  );
}
