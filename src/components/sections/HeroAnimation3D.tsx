import { useEffect, useRef, useState } from 'react';

export default function HeroAnimation3D() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.error("Autoplay failed:", error);
      });
    }
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-tr from-[#0B1F3A] via-[#0E2548] to-[#1E5AA8] z-[0]">
      {/* 1. The Video Element with smooth fade-in */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onLoadedData={() => setIsLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
          isLoaded ? 'opacity-50' : 'opacity-0'
        }`}
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 2. Premium Tech Grid Overlay (Dotted Pattern) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* 3. Luxury gold/blue ambient light glow on the bottom-right & top-left */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#1E5AA8]/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#C89B3C]/10 blur-[120px] pointer-events-none" />
    </div>
  );
}



